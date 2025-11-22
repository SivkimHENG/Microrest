import { Outbox, Prisma, PrismaClient } from "../../../../generated/prisma";
import { KafkaEventBus, KafkaProducerClient } from "../kafka";
import { v4 as uuidv4 } from "uuid";


export type OutboxStatus =
  | "PENDING"
  | "SENDING"
  | "SENT"
  | "FAILED"


interface OutboxEvent {
  eventId: string
  eventType: string
  payload: any
  aggregateType: string
  aggregateId: string
  occurredAt: Date
  status?: OutboxStatus
  version: number
}


export class OutboxWriter {
  constructor(private readonly db: PrismaClient) { }



  async execute(event: OutboxEvent, tx?: PrismaClient): Promise<void> {
    const executor = tx ?? this.db;


    const payload = typeof event.payload === "string" ?
      JSON.stringify(event.payload) : event.payload;

    await executor.outbox.create({
      data: {
        id: event.eventId ?? uuidv4(),
        aggregateId: event.aggregateId,
        aggregateType: event.aggregateType,
        type: event.eventType,
        status: "PENDING",
        occurredAt: event.occurredAt ?? new Date(),
        version: 1,
        payload,
      },
    });

  }


}
