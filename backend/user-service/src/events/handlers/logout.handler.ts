import { prisma } from "../../database";


interface LogoutPayload {
  eventId: string,
  userId: number,
  userUuid: string
  email: string,

}

export async function logout(
  eventId: string,
  payload: LogoutPayload
) {

  try {
    const result = await prisma.$transaction(async (tx) => {
      const processedEvent = await tx.proccessedEvent.findUnique({
        where: { eventId }
      });

      if (processedEvent) {
        console.log(`Event ${eventId} already processed`);
        return { alreadyProcessed: true };
      }

    });

    return result;


  } catch (err: any) {
    console.error(err);

  }




}
