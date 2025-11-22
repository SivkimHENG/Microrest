import { PrismaClient } from "../../../../generated/prisma";
import { KafkaEventBus } from "../kafka";




export class OutboxProcessorJob {

  constructor(
    private readonly db: PrismaClient,
    private readonly eventBus: KafkaEventBus
  ) { }


  async process(batchSize = 50): Promise<void> {
    const events = await this.db.outbox.findMany({
      where: { status: "PENDING" },
      orderBy: { occurredAt: "asc" },
      take: batchSize
    });


    if (events.length === 0) {
      return;
    }

    for (const evnt of events) {
      try {
        await this.eventBus.publish(evnt.type, evnt.payload);

        await this.db.outbox.update({
          where: { id: evnt.id },
          data: { status: "SENT" }
        });

      } catch (err: any) {
        await this.db.outbox.update({
          where: { id: evnt.id },
          data: { status: "FAILED" }
        });
      }
    }
  }

}

