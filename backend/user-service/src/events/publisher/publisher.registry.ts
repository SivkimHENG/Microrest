import { producer } from "../../config/kafka";
import { CategoryPublisher } from "./category.producer";

interface KafkaProducer {
  connect(): Promise<void>
  disconnect(): Promise<void>
}


class PublisherRegistry {

  private producers: KafkaProducer[];
  constructor(producers: KafkaProducer[]) {
    this.producers = producers;
  }


  async startAll(): Promise<void> {
    for (const producer of this.producers) {
      await producer.connect();
      console.log(`Started producer: ${producer.constructor.name}`);
    }

  }

  async stopAll(): Promise<void> {
    for (const producer of this.producers) {
      await producer.disconnect();
      console.log(`Stopped producer: ${producer.constructor.name}`);
    }
  }
}



export const publisherRegistry = new PublisherRegistry([
  new CategoryPublisher(producer)
]);


