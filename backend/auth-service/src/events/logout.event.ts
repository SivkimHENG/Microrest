import { producer } from "../kafka/producer.kafka"



export interface UserLogoutEvent {

  type: "UserLogout"
  event_id: string
  user_id: number
  user_uuid: string
  version: 1
  occurred_at: string
  email: string,
  username: string

}

export async function userLoggedout(event: UserLogoutEvent): Promise<void> {
  await producer.send({
    topic: "auth.user.event",
    messages: [{
      key: event.user_id.toString(),
      value: JSON.stringify(event),
      headers: {
        "event-type": event.type,
        "event-version": event.version.toString(),
        "event-id": event.event_id,
        "occurred-at": event.occurred_at,
      }
    }],
  });
}
