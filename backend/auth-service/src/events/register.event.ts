import { producer } from "../kafka/producer.kafka";

export interface UserRegisteredEvent {
  type: "UserRegistered",
  version: 1,
  occurred_at: string,
  event_id: string,
  user_id: number,
  email: string,
  roles: string[],


}


export async function userRegistrated(event: UserRegisteredEvent)
  : Promise<void> {
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

}




