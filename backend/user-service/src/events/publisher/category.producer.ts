import { Producer } from "kafkajs"
import {
  CategoryCreatedEvent,
  CategoryDeletedEvent,
  CategoryUpdatedEvent
} from "../../utils/interface.utils";
import { BaseProducer } from "./base.publisher";


export class CategoryPublisher extends BaseProducer {

  constructor(producer: Producer) {
    super(producer, 'user.management.event');
  }


  async createCategory(event: CategoryCreatedEvent) {
    try {
      await this.publish('CategoryCreated', event);
      console.log(`Publisher Category Created Event ${event.categoryUuid}`);

    } catch (err: any) {
      console.error(`Failed to publish CategoryCreated event: ${err.message}`);
      throw err;
    }

  }

  async updateCategory(event: CategoryUpdatedEvent) {
    try {
      await this.publish('CategoryUpdated', event);
      console.log(`Publisher Category Update Event ${event.categoryUuid}`);
    } catch (err: any) {
      console.error(`Failed to publish CategoryCreated event: ${err.message}`);
      throw err;
    }

  }


  async deleteCategory(event: CategoryDeletedEvent) {
    try {
      await this.publisher.send({
        topic: "user.management.event",
        messages: [{
          key: event.categoryUuid,
          value: JSON.stringify(event),
          headers: { eventType: event.type }
        }]
      });

    } catch (err: any) {
      console.error(`Failed to publish CategoryDeleted event: ${err.message}`);
      throw err;
    }

  }
}


