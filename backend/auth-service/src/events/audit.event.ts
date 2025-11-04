import { producer } from "../kafka/producer.kafka";


export type AuthActivity = {
  event_id: string;
  category: 'auth';
  action: 'register_success' | 'register_failure' | 'login_success' |
  'login_failure' | 'logout' | 'refresh_token';
  occurred_at: string;
  user_id: number;
  client_id: string;
  ip?: string;
  correlation_id?: string;
}


export async function emitAuthActivity(evnt: AuthActivity) {
  await producer.send({
    topic: process.env.TOPIC_SECURITY_AUTH_ACTIVITY || 'security.auth.activity',
    acks: -1,
    messages: [
      {
        key: evnt.user_id.toString(),
        value: JSON.stringify(evnt),
        headers: {
          'ce-type': evnt.action,
          'ce-source': 'auth-service',
          'ce-specversion': '1.0',
        },
      },
    ],


  })
}
