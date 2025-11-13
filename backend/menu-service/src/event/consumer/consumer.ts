import { Consumer, Kafka } from "kafkajs"


interface KafkaConsumer {
  connect(): Promise<void>
  disconnect(): Promise<void>
}


export abstract class BaseConsumer implements KafkaConsumer {
  protected consumer: Consumer;

  constructor(
    protected kafka: Kafka,
    protected topic: string,
    protected groupId: string,
  ) {
    this.consumer = this.kafka.consumer({
      groupId: this.groupId
    })
  }
  async connect(): Promise<void> {
    try {
      await this.consumer.connect();
      await this.consumer.subscribe({ topic: this.topic, fromBeginning: true });
      await this.consumer.run({
        eachMessage: async ({ message }) => {
          await this.handleMessage(message)
        }

      });
    } catch (err: any) {
      console.error(err.message);
      throw err;
    }

  }

  abstract handleMessage(message: any): Promise<void>

  async disconnect(): Promise<void> {
    await this.consumer.disconnect();
  }
}
