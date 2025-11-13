import { Producer } from "kafkajs"

interface CategoryData {
  category_name: string
  description: string
  updatedBy: string
  updatedAt: string
}

interface CategoryUpdatedEvent {
  eventId: string
  id: number
  categoryUuid: string
  category_name?: string
  description: string
  updatedBy: string
  updatedAt: Date
  type: "CategoryUpdated"
  changes: {
    before: Partial<CategoryData>,
    after: Partial<CategoryData>
  }
}

interface CategoryCreatedEvent {
  eventId: string
  categoryUuid: string
  category_name?: string
  description: string
  createdBy: string
  createdAt: Date
  updatedBy: string
  updatedAt: Date
  type: "CategoryCreated"
}



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


  async deleteCategory() {

  }



}


