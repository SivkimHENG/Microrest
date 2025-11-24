import { Partitioners, Producer } from "kafkajs";
import { kafka } from "../config/kafka.config";

let connected = false;
let connecting = false;
let eventListenersAttached = false;

export const producer: Producer = kafka.producer({
  createPartitioner: Partitioners.DefaultPartitioner,
  idempotent: false,
  maxInFlightRequests: 5,
  retry: { retries: 5 },
});

// Attach event listeners only once
function attachEventListeners() {
  if (eventListenersAttached) return;

  producer.on("producer.connect", () => {
    connected = true;
    connecting = false;
    console.log("[Kafka Producer] connected");
  });

  producer.on("producer.disconnect", () => {
    connected = false;
    console.warn("[Kafka Producer] disconnected");
  });

  producer.on("producer.network.request_timeout", (payload) => {
    console.error("[Kafka Producer] request timeout:", payload);
  });

  eventListenersAttached = true;
}

export async function startProducer(): Promise<void> {
  if (connected || connecting) {
    console.log("[Kafka Producer] already connected or connecting");
    return;
  }

  attachEventListeners();
  connecting = true;

  try {
    console.log("[Kafka Producer] connecting...");
    await producer.connect();
    // connected flag is set by the event handler
  } catch (err: any) {
    connecting = false;
    connected = false;
    console.error("[Kafka Producer] connection failed:", err.message);
    throw err; // Re-throw to let caller handle the error
  }
}

export async function stopProducer(): Promise<void> {
  if (!connected && !connecting) {
    console.log("[Kafka Producer] already disconnected");
    return;
  }

  try {
    console.log("[Kafka Producer] disconnecting...");
    await producer.disconnect();
    connected = false;
    connecting = false;
  } catch (err: any) {
    console.error("[Kafka Producer] disconnect failed:", err.message);
    throw err;
  }
}

// Helper to check connection status
export function isProducerConnected(): boolean {
  return connected;
}

// Graceful shutdown helper
export async function gracefulShutdown(): Promise<void> {
  console.log("[Kafka Producer] starting graceful shutdown...");

  try {
    await stopProducer();
    console.log("[Kafka Producer] graceful shutdown complete");
  } catch (err: any) {
    console.error("[Kafka Producer] graceful shutdown error:", err.message);
    throw err;
  }
}
