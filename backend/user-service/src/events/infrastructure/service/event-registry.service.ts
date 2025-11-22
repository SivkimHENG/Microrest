import { BaseEventHandler, EventHandler } from "../../core/interface/event-handler.interface";
import { BaseMessage } from "../../core/type/base-message.type";
import { KafkaEventBus } from "../kafka";


export class EventRegistryService {
  private handlers: Map<string, EventHandler[]> = new Map();



  registerHandler(handler: EventHandler): void {
    const handlers = this.handlers.get(handler.eventType) || [];
    handlers.push(handler);
    this.handlers.set(handler.eventType, handlers);
    console.log(`✓ Handler registered: ${handler.eventType}`);
  }

  registerHandlers(handlers: EventHandler[]): void {
    try {
      handlers.forEach(h => this.registerHandler(h))
      console.log("All the handler registered:", handlers);
    } catch (err: any) {
      console.error("Failed handler registering", err.message);
      throw err;
    }
  }


  async dispatch(event: BaseMessage<any>): Promise<void> {
    const eventType = this.extractEventType(event);
    const handlers = this.handlers.get(eventType) || [];

    if (handlers.length === 0) {
      console.warn(`No handlers for: ${eventType}`);
      return;
    }

    const results = await Promise.allSettled(
      handlers.map(h => h.handle(event))
    );
    const allFailed = results.every(r => r.status === 'rejected');
    if (allFailed && handlers.length > 0) {
      throw new Error(`All handlers failed for: ${eventType}`);
    }
  }

  getRegisteredEvents(): string[] {
    return Array.from(this.handlers.keys());
  }

  private extractEventType(event: BaseMessage<any>): string {
    return event.payload?.type || event.payload?.eventType || "Unkown";

  }
}

