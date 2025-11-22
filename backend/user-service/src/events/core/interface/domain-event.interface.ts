

export interface BaseDomainEvent<T = any> {
  aggregateId: string
  aggregateType: string
  eventId: string
  eventType: string
  occurredAt: Date
  payload: T
}
