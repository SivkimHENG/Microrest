import { producer } from "../kafka/producer.kafka"



export interface UserAuthenticateEvent {
  type: "UserAuthenticate"
  event_id: string
  user_id: number
  user_uuid: string
  version: 1
  occurred_at: string
  email: string,
  username: string

  ip_address: string
  user_agent: string
  last_login_at: Date,
  login_count: 1,

}


export async function userAuthenticated(event: UserAuthenticateEvent): Promise<void> {
  await producer.send({
    topic: "auth.user.event",
    messages: [{
      key: event.user_uuid,
      value: JSON.stringify(event),
      headers: {
        "event-type": event.type,
        "event-version": event.version.toString(),
        "event-id": event.event_id,
        "occurred-at": event.occurred_at,
      }
    }]
  });

  console.log(' Login event sent to Kafka');


}
