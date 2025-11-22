import { BaseEventHandler } from "../../../core/interface/event-handler.interface";
import { BaseMessage } from "../../../core/type/base-message.type";
import { UserAuthenticatePayload } from "../types/auth-payload.type";
import { PrismaClient } from "../../../../../generated/prisma";
import { prisma } from "../../../../database";



export class UserAuthenticateHandler
  extends BaseEventHandler<UserAuthenticatePayload> {
  constructor(private readonly db: PrismaClient = prisma) {
    super("UserAuthenticate")
  }

  async handle(event: BaseMessage<UserAuthenticatePayload>): Promise<any> {
    const { eventId, payload } = event;
    try {
      const result = await this.db.$transaction(async (tx) => {
        const processedEvent = await tx.proccessedEvent.findUnique({
          where: { eventId }
        });

        if (processedEvent) {
          console.log(`Event ${eventId} already processed`);
          return;
        }


        const existing = await tx.userProfiles.findUnique({
          where: { userUuid: payload.user_uuid }
        });

        if (!existing) {
          console.error(`User ${payload.user_uuid} not found`);
          await tx.proccessedEvent.create({
            data: { eventId, processedAt: new Date() }
          });
          return {
            success: false,
            error: "User not found",
            userUuid: payload.user_uuid
          };
        }


        const customer = await tx.customerProfiles.findUnique({
          where: { userUuid: payload.user_uuid }
        })

        if (!customer) {
          console.error(`Customer ${payload.user_uuid} not found`);
        }

        const authenticated = await tx.userProfiles.update({

          where: { userUuid: payload.user_uuid },
          data: {
            userId: payload.user_id,
            loginHistory: {
              create: {
                action: "LOGIN_SUCCESS",
                success: true,
                lastLoginAt: payload.last_login_at,
                lastLoginIp: payload.last_login_ip,
                ip_address: payload.ip_address,
                user_agent: payload.user_agent

              }

            }
          },
          include: {
            loginHistory: {
              take: 1,
              orderBy: { lastLoginAt: "desc" }

            }
          }
        });


        await tx.proccessedEvent.create({
          data: { eventId, processedAt: new Date() }
        });

        return {
          success: true,
          authenticated,
          lastLoginCount: authenticated.loginHistory
        }
      });
      return result;


    } catch (err: any) {
      console.error('Error in handleUserAuthenticated:', err.message);
      console.error('Stack:', err.stack);
      throw err;
    }
  }
}
