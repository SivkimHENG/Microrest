import { producer } from "../../config/kafka";
import { prisma } from "../../database"
import { CategoryPublisher } from "./category.producer"


type EventEmitter = (payload: any) => Promise<void>

const categoryPublisher = new CategoryPublisher(producer);



const EVENT_EMITTER: Record<string, EventEmitter> = {
  CategoryCreated: async (payload) => {
    await categoryPublisher.createCategory(payload);
    await categoryPublisher.updateCategory(payload);
  }
}

export async function processOutboxEvent() {

  const event = await prisma.outbox.findMany({
    where: {
      status: "PENDING",
    },
    orderBy: { occurredAt: "asc" },
    take: 20
  });

  for (const evnt of event) {
    const handler = EVENT_EMITTER[evnt.type];
    if (!handler) {

      console.error(`Unknown event type: ${evnt.type} for event ${evnt.id}`)
      await prisma.outbox.update({
        where: { id: evnt.id },
        data: { status: "FAILED" }
      });
      continue;

    }

    try {

      await handler(evnt.payload);

      await prisma.outbox.update({
        where: { id: evnt.id },
        data: { status: "SENT" }
      });


      console.log(`✓ Processed outbox event ${evnt.id} (${evnt.type})`);

    } catch (err: any) {

      console.error(`Failed to send event ${evnt.id}:`, err);
      await prisma.outbox.update({
        where: { id: evnt.id },
        data: {
          status: "FAILED",
        }
      });
    }

  }


}
