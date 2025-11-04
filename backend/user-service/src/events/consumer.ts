import { consumer } from "../config/kafka";
import { EVENT_HANDLERS } from "./event.registry";
import { transformAuthEvent } from "./message.transformer";


export async function startConsumer() {
  try {
    await consumer.connect();
    await consumer.subscribe({ topic: "auth.user.event", fromBeginning: true });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {

        try {
          const raw = JSON.parse(message.value!.toString());


          const handler = EVENT_HANDLERS[raw.type];
          if (!handler) {
            console.log(`No handler for event type: ${raw.type}`);
            return;
          }

          const transformed = transformAuthEvent(raw);

          const result = await handler(
            transformed?.eventId,
            transformed?.payload
          )

        } catch (err: any) {
          console.error("✗ ERROR:", err.message);
          console.error("Stack:", err.stack);
        }

      }
    });


  } catch (err: any) {
    console.error("✗ FATAL ERROR starting consumer:", err.message);
    console.error("Stack:", err.stack);
    throw err;
  }
}

export async function stopConsumer() {
  await consumer.disconnect();
  console.log("Consumer disconnected");
}
