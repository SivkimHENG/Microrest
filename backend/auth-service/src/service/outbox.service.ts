import { prisma } from "../database";
import { userAuthenticated } from "../events/authenticate.event";
import { userRegistrated } from "../events/register.event";
import { ensureKafkaConnected } from "../kafka/ensureConnected";

type EventEmitter = (payload: any) => Promise<void>;

const EVENT_EMITTER: Record<string, EventEmitter> = {
  UserRegistered: userRegistrated,
  UserAuthenticate: userAuthenticated,
};

const BATCH_SIZE = 20;
const MAX_RETRIES = 3;
let isProcessing = false;

interface OutboxEvent {
  id: string;
  type: string;
  payload: any;
  retryCount?: number;
}

export async function processOutboxEvents(): Promise<void> {
  // Prevent concurrent processing
  if (isProcessing) {
    console.log("[Outbox] Already processing, skipping this cycle");
    return;
  }

  isProcessing = true;

  try {
    // Check Kafka connection once before batch
    const isConnected = await ensureKafkaConnected();
    if (!isConnected) {
      console.warn("[Outbox] Kafka unavailable. Skipping this cycle.");
      return;
    }

    const events = await prisma.outbox.findMany({
      where: {
        status: "PENDING",
        // Optional: add retry logic
        // retryCount: { lt: MAX_RETRIES }
      },
      orderBy: { occurredAt: "asc" },
      take: BATCH_SIZE,
    });

    if (!events.length) {
      return;
    }

    console.log(`[Outbox] Processing ${events.length} events`);

    // Track results for batch update
    const successIds: string[] = [];
    const failedIds: string[] = [];
    const unknownTypeIds: string[] = [];

    // Process events
    for (const evt of events) {
      const handler = EVENT_EMITTER[evt.type];

      if (!handler) {
        console.error(`[Outbox] Unknown event type: ${evt.type} for event ${evt.id}`);
        unknownTypeIds.push(evt.id);
        continue;
      }

      try {
        // Execute event handler (sends to Kafka)
        await handler(evt.payload);
        successIds.push(evt.id);
        console.log(`[Outbox] Successfully sent event ${evt.id} (${evt.type})`);
      } catch (err: any) {
        console.error(`[Outbox] Failed to send event ${evt.id}:`, err.message);
        failedIds.push(evt.id);
      }
    }

    // Batch update database
    await Promise.all([
      // Mark successful events as SENT
      successIds.length > 0 &&
      prisma.outbox.updateMany({
        where: { id: { in: successIds } },
        data: { status: "SENT" },
      }),

      // Mark failed events (with retry logic)
      failedIds.length > 0 &&
      prisma.outbox.updateMany({
        where: { id: { in: failedIds } },
        data: {
          status: "FAILED",
          // Optionally increment retry count
          // retryCount: { increment: 1 }
        },
      }),

      // Mark unknown type events as FAILED
      unknownTypeIds.length > 0 &&
      prisma.outbox.updateMany({
        where: { id: { in: unknownTypeIds } },
        data: { status: "FAILED" },
      }),
    ]);

    console.log(
      `[Outbox] Batch complete - Success: ${successIds.length}, Failed: ${failedIds.length}, Unknown: ${unknownTypeIds.length}`
    );
  } catch (err: any) {
    console.error("[Outbox] Processing error:", err.message);
  } finally {
    isProcessing = false;
  }
}

// Optional: Start polling
let pollingInterval: NodeJS.Timeout | null = null;

export function startOutboxPolling(intervalMs: number = 5000): void {
  if (pollingInterval) {
    console.warn("[Outbox] Polling already started");
    return;
  }

  console.log(`[Outbox] Starting polling every ${intervalMs}ms`);

  // Process immediately
  processOutboxEvents();

  // Then poll on interval
  pollingInterval = setInterval(() => {
    processOutboxEvents();
  }, intervalMs);
}

export function stopOutboxPolling(): void {
  if (pollingInterval) {
    clearInterval(pollingInterval);
    pollingInterval = null;
    console.log("[Outbox] Polling stopped");
  }
}
