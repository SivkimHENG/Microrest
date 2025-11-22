import { BaseMessage } from "../type/base-message.type";


export interface EventHandler<T = any> {
  readonly eventType: string
  canHandle(event: BaseMessage<T>): boolean;
  handle(event: BaseMessage<T>): Promise<void>;
}

export abstract class BaseEventHandler<T = any> implements EventHandler<T> {
  constructor(public readonly eventType: string) { }

  canHandle(event: BaseMessage<T>): boolean {
    return event.payload && 'eventId' in event;
  }
  abstract handle(event: BaseMessage<T>): Promise<any>

  protected async handleError(err: Error, event: BaseMessage<T>): Promise<void> {
    console.error(`Error handling event ${this.eventType}:`, err);
  }


}
