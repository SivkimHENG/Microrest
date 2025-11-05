import { prisma } from "../database";
import { userAuthenticated } from "../events/authenticate.event";
import { userRegistrated } from "../events/register.event";


type EventEmiiter = (payload: any) => Promise<void>;


const EVENT_EMITTER: Record<string, EventEmiiter> = {
  UserRegistered: userRegistrated,
  UserAuthenticate: userAuthenticated,
}

export async function proccessOutboxEvents() {
  const event = await prisma.outbox.findMany({
    where: { status: "PENDING" },
    orderBy: { occurredAt: "asc" },
    take: 20,
  });


  for (const evt of event) {
    const handler = EVENT_EMITTER[evt.type];
    if (!handler) {
      console.error(`Unknown event type: ${evt.type} for event ${evt.id}`)
      await prisma.outbox.update({
        where: { id: evt.id },
        data: { status: "FAILED" }
      });
      continue;
    }

    try {

      await handler(evt.payload);

      await prisma.outbox.update({
        where: { id: evt.id },
        data: { status: "SENT" }
      });
    } catch (err: any) {
      console.error(`Failed to send event ${evt.id}:`, err);
      await prisma.outbox.update({
        where: { id: evt.id },
        data: {
          status: "FAILED",
        }
      });
    }

  }
}



