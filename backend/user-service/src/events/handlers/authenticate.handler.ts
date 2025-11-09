import { prisma } from "../../database"


interface AuthenticatePayload {
  eventId: string,
  userId: number,
  userUuid: string
  email: string,
  ipAddress: string,
  userAgent: string,
  lastLoginAt: Date
  loginCount: number
}


export async function handleUserAuthenticate(
  eventId: string,
  payload: AuthenticatePayload
) {

  try {
    const result = await prisma.$transaction(async (tx) => {
      const processedEvent = await tx.proccessedEvent.findUnique
        ({
          where: { eventId }
        });


      if (processedEvent) {
        console.log(`Event ${eventId} already processed`);
        return;
      }


      const existingUser = await tx.userProfiles.findUnique({
        where: { userUuid: payload.userUuid }
      });

      if (!existingUser) {
        console.error(`User ${payload.userUuid} not found`);
        await tx.proccessedEvent.create({
          data: { eventId, processedAt: new Date() }
        });
        return {
          success: false,
          error: "User not found",
          userUuid: payload.userUuid
        };
      }


      const existingCustomer = await tx.userProfiles.findUnique({
        where: { userUuid: payload.userUuid }
      })

      if (!existingCustomer) {
        console.error(`Customer ${payload.userUuid} not found`);
      }



      const authenticated = await tx.userProfiles.update({
        where: { userUuid: payload.userUuid },
        data: {
          userId: payload.userId,
          loginHistory: {
            create: {
              action: "LOGIN_SUCCESS",
              success: true,
              lastLoginAt: payload.lastLoginAt,
              lastLoginIp: payload.ipAddress,
              ip_address: payload.ipAddress,
              user_agent: ""

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

      console.log(`✓ User ${payload.userUuid} authenticated successfully`);

      return {
        success: true,
        authenticated,
        lastLoginCount: authenticated.loginHistory
      };

    })

    console.log(result);

    return result;


  } catch (err: any) {
    console.error('Error in handleUserAuthenticated:', err.message);
    console.error('Stack:', err.stack);
    throw err;
  }





}
