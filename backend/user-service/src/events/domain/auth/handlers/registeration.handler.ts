import { BaseEventHandler } from "../../../core/interface/event-handler.interface";
import { PrismaClient } from "../../../../../generated/prisma";
import { prisma } from "../../../../database";
import { BaseMessage } from "../../../core/type/base-message.type";
import { UserRegisteredPayload } from "../types/auth-payload.type";


export class UserRegistrationHandler
  extends BaseEventHandler<UserRegisteredPayload> {

  constructor(private readonly db: PrismaClient = prisma) {
    super("UserRegistered");
  }

  async handle(event: BaseMessage<UserRegisteredPayload>): Promise<any> {

    const { eventId, payload } = event;

    try {
      const result = await this.db.$transaction(async (tx) => {
        const processedEvent = await tx.proccessedEvent.findUnique({
          where: { eventId }
        });

        if (processedEvent) {
          console.log(`event ${eventId} already processed`);
          return { alreadyprocessed: true };
        }

        const existing = await tx.userProfiles.findUnique({
          where: { userId: payload.user_id }
        });

        if (existing) {
          await tx.proccessedEvent.create({
            data: { eventId, processedAt: new Date() }
          });
          console.log(`User ${payload.user_uuid} already exists`);
          return { userExists: true, user: existing };
        }

        const newUser = await tx.userProfiles.create({
          data: {
            eventId: payload.event_id,
            userId: payload.user_id,
            userUuid: payload.user_uuid,
            username: payload.email.split("@")[0],
            email: payload.email,
            role: "CUSTOMER"
          }
        });


        await tx.customerProfiles.create({
          data: {
            userUuid: payload.user_uuid,
            loyalty_points: 0
          }

        });


        await tx.proccessedEvent.create({
          data: { eventId, processedAt: new Date() }
        });

        console.log(`User ${payload.user_id} created successfully`);
        return { success: true, user: newUser };
      });
      return result;

    } catch (err: any) {
      console.error('Error in handleUserRegistered:', err.message);
      console.error('Stack:', err.stack);
      throw err;
    }
  }

}

