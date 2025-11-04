

export interface EventMetadata {
  event_id: string
  event_type: string
  event_version: string
  timestamp: number
  correlation_id: number
  traceparent: string
  producer_serivce: string
  idempotency_key: string
}

export interface RegistrationPayload {
  registration_id: string
  username: string
  email: string
  password_hash: string
  requested_at: number
  user_meta: Record<string, string> | null

}

export interface UserRegistrationEvent {
  meta: EventMetadata
  payload: RegistrationPayload
}
