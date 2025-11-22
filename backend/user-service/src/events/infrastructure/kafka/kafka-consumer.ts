import { Consumer, EachMessagePayload, Kafka, KafkaConfig, logLevel } from "kafkajs";

export interface KafkaConsumerConfig {
  clientId: string
  brokers: string[]
  groupId: string
  topics: string[]
  fromBeginning?: boolean
}



export interface MessageHandler {
  (payload: EachMessagePayload): Promise<void>
}



export class KafkaConsumerClient {
  private kafka: Kafka
  private consumer: Consumer
  private messageHandler: Map<string, MessageHandler[]> = new Map();
  private isConnected: boolean = false;

  constructor(private readonly config: KafkaConsumerConfig) {
    const kafkaConfig: KafkaConfig = {
      clientId: config.clientId,
      brokers: config.brokers,
      retry: {
        retries: 10,
        initialRetryTime: 100,
        multiplier: 2
      },
      logLevel: logLevel.INFO
    };

    this.kafka = new Kafka(kafkaConfig);
    this.consumer = this.kafka.consumer({
      groupId: config.groupId,
      sessionTimeout: 30000,
      heartbeatInterval: 3000
    });

  }

  async connect(): Promise<void> {
    try {
      await this.consumer.connect();
      await this.consumer.subscribe({
        topics: this.config.topics,
        fromBeginning: this.config.fromBeginning ?? false,
      });
      this.isConnected = true;
      console.log(`✓ Kafka consumer connected to topics: ${this.config.topics.join(', ')}`);

    } catch (err: any) {
      console.error('Failed to connect Kafka consumer:', err);
      throw err;
    }
  }


  registerHandler(topic: string, handler: MessageHandler): void {
    const handlers = this.messageHandler.get(topic) || [];
    handlers.push(handler);
    this.messageHandler.set(topic, handlers);
    console.log(`Registered handler for topic ${topic}`);
  }

  async start(): Promise<void> {
    if (!this.isConnected) {
      throw new Error("Cannot start Kafka consumer: not connected");
    }

    await this.consumer.run({
      eachMessage: async (payload: EachMessagePayload) => {
        const { topic, partition, message } = payload;
        try {
          console.log(`Received message from ${topic}[${partition}] @ offset ${message.offset}`);

          const handlers = this.messageHandler.get(topic) || [];

          if (handlers.length === 0) {
            console.warn(`No handlers registered for topic ${topic}`);
            return;
          }


          await Promise.all(
            handlers.map((handler) => handler(payload))
          )

        } catch (err: any) {
          console.error(`Error processing message from ${topic}:`, err);
          throw err;
        }
      }
    });

  }

  async disconnect(): Promise<void> {
    try {
      await this.consumer.disconnect();
      this.isConnected = false;
      console.log(`Consumer disconnecting:${this.isConnected} `);
    } catch (err: any) {
      console.error('Error disconnecting Kafka consumer:', err);
      throw err;
    }
  }
  async pause(topics: string[]): Promise<void> {
    const topicsToResume = topics.map(topic => ({ topic }));
    this.consumer.pause(topicsToResume);
    console.log(`Paused consumption from topics: ${topics.join(', ')}`);
  }

  async resume(topics: string[]): Promise<void> {
    const topicsToResume = topics.map(topic => ({ topic }));
    this.consumer.resume(topicsToResume);
    console.log(`Resume consumption from topics: ${topics.join(', ')}`);
  }

  isRunning(): boolean {
    return this.isConnected;
  }

}



