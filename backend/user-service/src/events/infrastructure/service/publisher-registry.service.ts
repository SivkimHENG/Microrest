import { EventPublisher } from "../../core/interface/event-publisher.interface";
import { KafkaEventBus } from "../kafka";


export class PublisherRegistryService {

  private publishers: Map<string, EventPublisher> = new Map();
  private eventBus: KafkaEventBus;



  constructor(eventBus: KafkaEventBus) {
    this.eventBus = eventBus;
  }



  registerPublisher(publisher: EventPublisher): void {
    if (!publisher) {
      throw new Error("Publisher cannot be null or undefined");
    }

    if (!publisher.eventType) {
      throw new Error("Publisher must have an eventType");
    }

    if (this.publishers.has(publisher.eventType)) {
      console.warn(`Publisher for event type "${publisher.eventType}" is being overwritten`);
    }

    publisher.initialize(this.eventBus)
    this.publishers.set(publisher.eventType, publisher);
    console.log(`✓ Publisher registered: ${publisher.eventType}`);
  }

  registerPublishers(publishers: EventPublisher[]): void {

    if (!publishers || publishers.length === 0) {
      console.warn("No publisher to register");
      return;
    }

    publishers.forEach(p => this.registerPublisher(p));
    console.log(`✓ Registered ${publishers.length} publisher(s)`);
  }

  async publish<T>(eventType: string, payload: T): Promise<void> {
    const publisher = this.publishers.get(eventType);

    if (!publisher) {
      throw new Error(`No publisher for: ${eventType}`);
    }
    try {
      await publisher.publish(payload);
    } catch (err: any) {
      console.error(`Failed to publish event ${eventType}`);
      throw err;
    }
  }

  async publishBatch(events: Array<{ eventType: string; payload: any }>): Promise<void> {
    const results = await Promise.allSettled(
      events.map(({ eventType, payload }) => this.publish(eventType, payload))
    );

    const failed = results.filter(r => r.status === 'rejected');
    if (failed.length > 0) {
      console.error(`${failed.length} events failed to publish`);
    }
  }

  getRegisteredPublishers(): string[] {
    return Array.from(this.publishers.keys());
  }

}

