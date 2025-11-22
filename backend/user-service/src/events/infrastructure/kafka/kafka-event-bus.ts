import { EachMessagePayload } from 'kafkajs';
import { KafkaConsumerClient, KafkaConsumerConfig } from './kafka-consumer';
import { KafkaProducerClient, KafkaProducerConfig, ProduceMessage } from './kafka-producer';



export interface KakfaEventBusConfig {
  consumer: KafkaConsumerConfig,
  producer: KafkaProducerConfig
}


export interface EventBusHandler {
  (topic: string, message: any, metadata: any): Promise<void>;
}



export class KafkaEventBus {
  private initialized = false;
  private consumer: KafkaConsumerClient;
  private producer: KafkaProducerClient;
  private eventHandlers: Map<string, EventBusHandler[]> = new Map();

  constructor(private readonly config: KakfaEventBusConfig) {
    this.consumer = new KafkaConsumerClient(config.consumer)
    this.producer = new KafkaProducerClient(config.producer)
  }


  async initialize(): Promise<void> {
    try {
      await Promise.all([
        this.consumer.connect(),
        this.producer.connect(),
      ]);
      this.config.consumer.topics.forEach(topic => {
        this.consumer.registerHandler(topic, this.handleMessage.bind(this));
      });
      this.initialized = true;
      console.log('✓ Kafka Event Bus initialized');
    } catch (err: any) {
      console.error('Failed to initialize Kafka Event Bus:', err);
      throw err;
    }

  }
  async start() {
    try {
      if (!this.initialized) {
        throw new Error('Kafka Event Bus must be initialized before starting');
      }
      await this.consumer.start();
      console.log("✓ Kafka Event Bus started");
    } catch (err: any) {
      console.error("Failed to start Kafka Event Bus:", err);
      throw err;
    }
  }


  on(topic: string, handler: EventBusHandler): void {
    const handlers = this.eventHandlers.get(topic) || [];
    handlers.push(handler);
    this.eventHandlers.set(topic, handlers);
    console.log(`Event handler registered for topic: ${topic}`);
  }

  async publish(topic: string, event: any, key?: string): Promise<void> {

    try {
      const message: ProduceMessage = {
        topic,
        key: key || event.eventId || Date.now().toString(),
        value: JSON.stringify(event),
      }
      await this.producer.send(message);
    } catch (err: any) {
      console.error(`Failed to publish event to ${topic}:`, err);
      throw err;
    }
  }

  async publishBatch(events: Array<{ topic: string; event: any; key?: string }>): Promise<void> {
    try {
      const message: ProduceMessage[] = events.map(({ topic, event, key }) => ({
        topic,
        key: key || event.eventId || Date.now().toString(),
        value: JSON.stringify(event)
      }));

      await this.producer.sendBatch(message);
    } catch (err: any) {
      console.error(`Failed to publish batch event to: ${err.message}`);
      throw err;

    }

  }

  private async handleMessage(payload: EachMessagePayload): Promise<void> {

    const { topic, message } = payload;
    try {

      const value = message.value?.toString();
      if (!value) {
        console.warn(`Received empty message`);
        return;
      }

      const parsedMessage = JSON.parse(value);

      const metadata = {
        topic,
        partition: payload.partition,
        offset: message.offset,
        timestamp: message.timestamp,
        headers: message.headers
      };
      const handlers = this.eventHandlers.get(topic) || [];

      if (handlers.length === 0) {
        console.warn(`No handlers registered for topic: ${topic}`);
        return;
      }

      await Promise.all(
        handlers.map(async handler => handler(topic, message, metadata))
      );


    } catch (err: any) {
      console.error(`Error handling message from ${topic}:`, err);
      throw err;
    }
  }

  async shutdown(): Promise<void> {
    try {
      await Promise.all([
        this.consumer.disconnect(),
        this.producer.disconnect(),
      ]);
      console.log('✓ Kafka Event Bus shut down');
    } catch (error) {
      console.error('Error shutting down Kafka Event Bus:', error);
      throw error;
    }
  }
}





