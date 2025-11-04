import { prisma } from "../database";
import { emitUserRegistrated } from "../events/domain.event";


export async function proccessOutboxEvents() {
  const event = await prisma.outbox.findMany({
    where: { status: "PENDING" },
    orderBy: { occurredAt: "asc" },
    take: 20,
  });



  for (const evt of event) {
    try {
      if (evt.type === "UserRegistered")
        await emitUserRegistrated(evt.payload);



      await prisma.outbox.update({
        where: { id: evt.id },
        data: { status: "SENT" }
      });
    } catch (err: any) {
      console.error(`Failed to send event ${evt.id}:`, err);
    }

  }
}
