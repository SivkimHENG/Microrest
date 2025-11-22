import { prisma } from "../../../database";
import { KafkaEventBus } from "../kafka";
import { OutboxProcessorJob } from "./outbox-processor";




async function outboxWorker() {

  const eventBus = new KafkaEventBus({
    consumer: {
      topics: ["user.management.event"],
      groupId: "user-service-group",
      clientId: "user-service-consumer",
      brokers: ["localhost:9092"],
      fromBeginning: false
    },
    producer: { brokers: ["localhost:9092"], clientId: "outbox-worker" }
  });


  await eventBus.initialize();
  const processor = new OutboxProcessorJob(prisma, eventBus);

  console.log(`Outbox Worker started`);


  while (true) {
    try {
      await processor.process();

    } catch (err: any) {
      console.error("Worked Cycle failed", err);

    }

    await new Promise((r) => setTimeout(r, 6000));
  }
}

