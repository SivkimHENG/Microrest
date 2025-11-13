import { Kafka, Producer } from "kafkajs";
import { BaseProducer } from "./base.publisher";
import { MenuItemCreatedEvent } from "../../utils/interface.utils";


export class MenuItemPublisher extends BaseProducer {

  constructor(producer: Producer) {
    super(producer, 'user.management.event');
  }

  async createMenuItem(event: MenuItemCreatedEvent) {
    try {
      await this.publish('MenuItemCreated', event, {
        type: event.type
      });

      console.log(`Menu Item Created ${event.itemUuid}`);

    } catch (err: any) {
      console.error(err.message);
      throw err;
    }
  }


}

