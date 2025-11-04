import { Partitioners } from "kafkajs";
import { kafka } from "../config/kafka.config";



export const producer = kafka.producer({
  createPartitioner: Partitioners.DefaultPartitioner,
  idempotent: true,
  maxInFlightRequests: 1,
  retry: { retries: 5 }
});




export async function startProducer() {
  try {
    await producer.connect();
    console.log("Producer connecting")
  } catch (err: any) {
    console.error(err.message);

  }
}

export async function stopProducer() {
  await producer.disconnect();
}
