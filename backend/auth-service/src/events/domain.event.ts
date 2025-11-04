import { producer } from "../kafka/producer.kafka";




export async function emitUserRegistrated(event: any) {
  try {
    await producer.send({
      topic: "auth.user.event",
      messages: [
        {
          key: event.user_id.toString(),
          value: JSON.stringify(event),
          headers: {
            "event-type": event.type,
            "event-version": event.version.toString(),
            "event-id": event.event_id,
            "occurred-at": event.occurred_at,
          }
        }
      ]

    });
    console.log(`Event emitted: ${event.type} -> user_id=${event.user_id}`);

  } catch (err: any) {
    console.error(` Failed to emit event ${event.type}:`, err);
    throw err;
  }
}




