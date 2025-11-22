import { v4 as uuidv4 } from "uuid";
import { KafkaEventBus, KakfaEventBusConfig } from "../../infrastructure/kafka";


export interface EventPublisher<T = any> {
  readonly eventType: string
  initialize(eventBus: KafkaEventBus): void
  publish(payload: T): Promise<void>
}


export abstract class BaseEventPublisher<T = any> implements EventPublisher<T> {
  protected eventBus?: KafkaEventBus

  constructor(
    public readonly eventType: string,
    protected readonly topic: string
  ) { }

  abstract publish(payload: T): Promise<void>

  initialize(eventBus: KafkaEventBus): void {
    this.eventBus = eventBus;

  }


}




