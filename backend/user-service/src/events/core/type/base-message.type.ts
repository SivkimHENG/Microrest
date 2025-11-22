



export interface BaseMessage<T = Record<string, any>> {
  eventId: string
  timestamp: string
  payload: T
}


export interface BaseRawEvent {
  event_id: string
  occurred_at: string
  type: string
}

export interface KafkaMessageMetadata {
  topic: string
  partition: string
  offset: string
  key?: string
}
