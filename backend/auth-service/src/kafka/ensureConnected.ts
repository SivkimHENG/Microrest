import { producer, startProducer } from "./producer.kafka";

export async function ensureKafkaConnected(): Promise<boolean> {
  try {
    await startProducer();
    return true;
  } catch (err: any) {
    console.error("[Kafka] Connection check failed:", err.message);
    return false;
  }
}
