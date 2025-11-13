import { Producer } from "kafkajs"
import {
  CategoryCreatedEvent,
  CategoryDeletedEvent,
  CategoryUpdatedEvent
} from "../../utils/interface.utils";


export class CategoryPublisher {
  private publisher: Producer;

  constructor(publisher: Producer) {
    this.publisher = publisher;
  }


  async connect(): Promise<void> {
    await this.publisher.connect();
  }

  async disconnect(): Promise<void> {
    await this.publisher.disconnect();
  }


  async createCategory(event: CategoryCreatedEvent) {
    try {
      await this.publisher.send({

        topic: 'user.management.event',
        messages: [{
          key: event.categoryUuid,
          value: JSON.stringify(event),
          headers: { eventType: event.type }
        }]
      });
      console.log(`Publisher Category Created Event ${event.categoryUuid}`);

    } catch (err: any) {
      console.error(`Failed to publish CategoryCreated event: ${err.message}`);
      throw err;
    }

  }

  async updateCategory(event: CategoryUpdatedEvent) {
    try {
      await this.publisher.send({
        topic: 'user.management.event',
        messages: [{
          key: event.categoryUuid,
          value: JSON.stringify(event),
          headers: { eventType: event.type }
        }]
      });
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


