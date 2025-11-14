import { Producer } from "kafkajs";
import { BaseProducer } from "./base.publisher";
import { MenuItemCreatedEvent, MenuItemDeletedEvent, MenuItemUpdatedEvent } from "../../utils/interface.utils";


export class MenuItemPublisher extends BaseProducer {

  constructor(producer: Producer) {
    super(producer, 'user.management.event');
  }

  async createMenuItem(event: MenuItemCreatedEvent) {
    try {
      await this.publish('MenuItemCreated', event);

      console.log(`Menu Item Created ${event.itemUuid}`);

    } catch (err: any) {
      console.error(err.message);
      throw err;
    }
  }

  async updateMenuItem(event: MenuItemUpdatedEvent) {
    try {
      await this.publish('MenuItemUpdated', event);
      console.log(`Menu Item Updated ${event.itemUuid}`);
    } catch (err: any) {
      console.error(err.message);
      throw err;
    }

  }

  async deleteMenuItem(event: MenuItemDeletedEvent) {
    try {
      await this.publish('MenuItemDeleted', event);
      console.log(`Menu Item Updated ${event.itemUuid}`);

    } catch (err: any) {
      console.error(err.message);
      throw err;

    }

  }


}

