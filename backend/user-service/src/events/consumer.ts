import { consumer } from "../config/kafka";
import { EVENT_HANDLERS } from "./event.registry";
import { transformAuthEvent } from "./message.transformer";


export async function startConsumer() {
  try {
    await consumer.connect();
    await consumer.subscribe({ topic: "auth.user.event", fromBeginning: false });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {

        try {
          const raw = JSON.parse(message.value!.toString());

          console.log('📥 Received event:', JSON.stringify(raw, null, 2));
          console.log('📋 Event type:', raw.type);

          const handler = EVENT_HANDLERS[raw.type];
          console.log('🎯 Handler found:', !!handler);

          if (!handler) {
            console.log(`❌ No handler for event type: "${raw.type}"`);
            console.log('📚 Available handlers:', Object.keys(EVENT_HANDLERS));
            return;
          }

          const transformed = transformAuthEvent(raw);


          console.log(transformed);

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
