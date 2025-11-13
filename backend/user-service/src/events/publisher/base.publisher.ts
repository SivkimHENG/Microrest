import { Kafka, Producer } from "kafkajs"


interface KafkaProducer {
  connect(): Promise<void>
  disconnect(): Promise<void>
  publish<T>(event: string, data: T, headers: Record<string, string>): Promise<void>
}


export abstract class BaseProducer implements KafkaProducer {

  protected publisher: Producer
  protected topic: string



  constructor(publisher: Producer, topic: string) {
    this.publisher = publisher;
    this.topic = topic;
  }

  async connect(): Promise<void> {
    await this.publisher.connect();
  }

  async disconnect(): Promise<void> {
    await this.publisher.disconnect();
  }
  async publish<T>(event: string, data: T, headers?: Record<string, string>): Promise<void> {
    await this.publisher.send({
      topic: this.topic,
      messages: [{
        key: event,
        value: JSON.stringify(data),
        headers: headers
      }]
    });
  }
}
