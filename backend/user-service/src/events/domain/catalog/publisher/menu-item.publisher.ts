import { BaseEventPublisher } from "../../../core/interface/event-publisher.interface";
import { BaseRawEvent } from "../../../core/type/base-message.type";
import { KafkaEventBus } from "../../../infrastructure/kafka";
import { MenuItemCreatedEvent, MenuItemDeletedEvent, MenuItemUpdatedEvent } from "../types/catalog-event.type";
import { v4 as uuidv4 } from "uuid";


type MenuItemEvent =
  | MenuItemCreatedEvent
  | MenuItemUpdatedEvent
  | MenuItemDeletedEvent;


class MenuItemPublisher extends BaseEventPublisher<MenuItemEvent> {



  private readonly eventHandlers: Map<MenuItemEvent["type"], (payload: MenuItemEvent)
    => Promise<void>>;
  private initialized = false;


  constructor() {
    super("MenuItem", "user.management.event");

    this.eventHandlers = new Map([
      ["MenuItemCreated", (payload) => this.publishCreated(payload as MenuItemCreatedEvent)],
      ["MenuItemUpdated", (payload) => this.publishUpdated(payload as MenuItemUpdatedEvent)],
      ["MenuItemDeleted", (payload) => this.publishDeleted(payload as MenuItemDeletedEvent)],
    ])

  }


  initialize(eventBus: KafkaEventBus): void {
    if (this.initialized) return;
    this.eventBus = eventBus;
    this.initialized = true;
    console.log("MenuItems Publisher initialize");
  }

  async publish(payload: MenuItemEvent): Promise<void> {
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


  async publishCreated(event: MenuItemCreatedEvent) {
    try {
      if (!this.eventBus) {
        throw new Error("EventBus not initialized. Call initialize() first....");
      }


      const events: MenuItemCreatedEvent & BaseRawEvent = {
        type: "MenuItemCreated",
        menuItemId: event.menuItemId,
        event_id: uuidv4(),
        occurred_at: new Date().toISOString(),
        itemUuid: uuidv4(),
        menuItem_name: event.menuItem_name,
        description: event.description,
        basePrice: event.basePrice,
        imageUrl: event.imageUrl,
        isAvailable: true,
        displayOrder: event.displayOrder,
        createdAt: new Date(),
        createdBy: "ADMIN",
        menuItemVariant: {
          menuItemVariantId: event.menuItemVariant.menuItemVariantId,
          size_name: event.menuItemVariant.size_name,
          priceAdjustment: event.menuItemVariant.priceAdjustment
        },
        category: {
          categoryId: event.category.categoryId,
          categoryUuid: uuidv4(),
          category_name: event.category.category_name,
          description: event.category.description
        },

      }

      await this.eventBus.publish(this.topic, events, events.itemUuid);

      console.log(`✓ Published MENU_ITEM_CREATED for: ${events.itemUuid}`);

    } catch (err: any) {
      console.error(err.message);
      throw err;
    }
  }


  async publishUpdated(event: MenuItemUpdatedEvent) {
    try {
      if (!event.itemUuid) {
        throw new Error("itemUuid is required for update.");
      }

      if (!this.eventBus) {
        throw new Error("EventBus not initialized. Call initialize() first.");
      }



      const events: MenuItemUpdatedEvent & BaseRawEvent = {
        event_id: uuidv4(),
        occurred_at: new Date().toISOString(),
        type: "MenuItemUpdated",
        itemUuid: event.itemUuid,
        id: event.id,
        menuItem_name: event.menuItem_name,
        description: event.description,

        basePrice: event.basePrice,
        imageUrl: event.imageUrl,
        displayOrder: event.displayOrder,
        isAvailable: true,
        updatedBy: "ADMIN",
        updatedAt: new Date(),
        menuItemVariant: {
          menuItemVariantId: event.menuItemVariant.menuItemVariantId,
          size_name: event.menuItemVariant.size_name,
          priceAdjustment: event.menuItemVariant.priceAdjustment
        },

        category: {
          categoryId: event.category.categoryId,
          categoryUuid: uuidv4(),
        }

      }
      await this.eventBus.publish(this.topic, events, events.itemUuid);
      console.log(`✓ Published MENU_ITEM_UPDATED for: ${event.itemUuid}`);

    } catch (err: any) {
      console.error(err.message);
      throw err;
    }

  }

  async publishDeleted(event: MenuItemDeletedEvent) {

    try {
      if (!event.itemUuid) {
        throw new Error("itemUuid is required for update.");
      }

      if (!this.eventBus) {
        throw new Error("EventBus not initialized. Call initialize() first.");
      }


      const events: MenuItemDeletedEvent & BaseRawEvent = {
        event_id: uuidv4(),
        occurred_at: new Date().toISOString(),
        type: "MenuItemDeleted",
        itemUuid: event.itemUuid,
        deletedAt: new Date()

      }
      await this.eventBus.publish(this.topic, events, events.itemUuid);
      console.log(`✓ Published MENU_ITEM_UPDATED for: ${event.itemUuid}`);

    } catch (err: any) {
      console.error(err.message);
      throw err;
    }
  }
}


export const menuItemPublisher = new MenuItemPublisher();
