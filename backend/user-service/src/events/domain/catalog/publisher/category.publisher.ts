import { BaseEventPublisher } from "../../../core/interface/event-publisher.interface";
import { BaseRawEvent } from "../../../core/type/base-message.type";
import { KafkaEventBus } from "../../../infrastructure/kafka";
import {
  CategoryCreatedEvent,
  CategoryDeletedEvent,
  CategoryUpdatedEvent
} from "../types/catalog-event.type";
import { v4 as uuidv4 } from "uuid";

type CategoryEvent = CategoryCreatedEvent | CategoryUpdatedEvent | CategoryDeletedEvent

export class CategoryPublisher extends BaseEventPublisher<CategoryEvent> {

  private readonly eventHandlers:
    Map<CategoryEvent["type"], (payload: CategoryEvent) => Promise<void>>;
  private initialized = false;


  constructor() {
    super("Category", "user.management.event");


    this.eventHandlers = new Map([
      ["CategoryCreated", (payload) => this.publishCreated(payload as CategoryCreatedEvent)],
      ["CategoryUpdated", (payload) => this.publishUpdated(payload as CategoryUpdatedEvent)],
      ["CategoryDeleted", (payload) => this.publishDeleted(payload as CategoryDeletedEvent)]
    ]);
  }

  initialize(eventBus: KafkaEventBus): void {
    if (this.initialized) return;
    this.eventBus = eventBus;
    this.initialized = true;
    console.log("Category Publisher initialized");
  }

  async publish(payload: CategoryEvent): Promise<void> {
    try {
      if (!this.eventBus) {
        throw new Error("EventBus not initialized. Call initialize() first.");
      }

      const handler = this.eventHandlers.get(payload.type);

      if (!handler) {
        throw new Error(`Unknown category event type: ${payload.type}`);
      }
      await handler(payload);
    } catch (err: any) {
      console.error(err.message);
      throw err;
    }
  }

  async publishCreated(event: CategoryCreatedEvent) {
    try {
      if (!this.eventBus) {
        throw new Error("EventBus not initialized. Call initialize() first....");
      }
      const events: CategoryCreatedEvent & BaseRawEvent = {
        event_id: uuidv4(),
        occurred_at: new Date().toISOString(),
        type: "CategoryCreated",
        categoryUuid: uuidv4(),
        category_name: event.category_name,
        description: event.description,
        categoryId: event.categoryId,
        isActive: event.isActive,
        createdAt: new Date(),
        createdBy: "ADMIN"
      }

      await this.eventBus.publish(this.topic, events, events.categoryUuid);
      console.log(`✓ Published CATEGORY_CREATED for: ${events.categoryUuid}`);
    } catch (err: any) {
      console.error(err.message);
      throw err;
    }
  }


  async publishUpdated(event: CategoryUpdatedEvent) {
    if (!event.categoryUuid) {
      throw new Error("cateogryUuid is required for update.");
    }

    if (!this.eventBus) {
      throw new Error("EventBus not initialized. Call initialize() first.");
    }




    const events: CategoryUpdatedEvent & BaseRawEvent = {
      event_id: uuidv4(),
      occurred_at: new Date().toISOString(),
      type: "CategoryUpdated",
      categoryUuid: event.categoryUuid,
      category_name: event.category_name,
      description: event.description,
      displayOrder: event.displayOrder,
      categoryId: event.categoryId,
      isActive: event.isActive,
      updatedAt: new Date(),
    }
    await this.eventBus.publish(this.topic, events, events.categoryUuid);
    console.log(`✓ Published CATEGORY_UPDATED for: ${event.categoryUuid}`);
  }

  async publishDeleted(event: CategoryDeletedEvent) {
    if (!event.categoryUuid) {
      throw new Error("cateogryUuid is required for update.");
    }
    if (!this.eventBus) {
      throw new Error("EventBus not initialized. Call initialize() first.");
    }

    const events: CategoryDeletedEvent & BaseRawEvent = {

      event_id: uuidv4(),
      occurred_at: new Date().toISOString(),
      type: "CategoryDeleted",
      categoryUuid: event.categoryUuid,
      deletedAt: new Date()
    }

    await this.eventBus.publish(this.topic, events, events.categoryUuid);
    console.log(`✓ Published CATEGORY_DELETED for: ${event.categoryUuid}`);
  }

}



export const categoryPublisher = new CategoryPublisher();
