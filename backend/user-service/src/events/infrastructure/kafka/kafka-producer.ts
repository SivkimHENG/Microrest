import { Kafka, Producer, ProducerRecord, RecordMetadata, KafkaConfig } from 'kafkajs';

export interface KafkaProducerConfig {
  clientId: string;
  brokers: string[];
}

export interface ProduceMessage {
  topic: string;
  key?: string;
  value: string | Buffer;
  headers?: Record<string, string>;
  partition?: number;
}

export class KafkaProducerClient {
  private kafka: Kafka;
  private producer: Producer;
  private isConnected: boolean = false;

  constructor(private readonly config: KafkaProducerConfig) {
    const kafkaConfig: KafkaConfig = {
      clientId: config.clientId,
      brokers: config.brokers,
      retry: {
        retries: 8,
        initialRetryTime: 100,
        multiplier: 2,
      },
    };

    this.kafka = new Kafka(kafkaConfig);
    this.producer = this.kafka.producer({
      allowAutoTopicCreation: false,
      transactionTimeout: 30000,
    });
  }

  /**
   * Connect to Kafka
   */
  async connect(): Promise<void> {
    try {
      await this.producer.connect();
      this.isConnected = true;
      console.log('✓ Kafka producer connected');
    } catch (error) {
      console.error('Failed to connect Kafka producer:', error);
      throw error;
    }
  }

  /**
   * Send a single message
   */
  async send(message: ProduceMessage): Promise<RecordMetadata[]> {
    if (!this.isConnected) {
      throw new Error('Producer not connected. Call connect() first.');
    }

    try {
      const record: ProducerRecord = {
        topic: message.topic,
        messages: [{
          key: message.key,
          value: message.value,
          headers: message.headers,
          partition: message.partition,
        }],
      };

      const metadata = await this.producer.send(record);

      console.log(`✓ Message sent to ${message.topic}:`, {
        partition: metadata[0].partition,
        offset: metadata[0].offset,
      });

      return metadata;
    } catch (error) {
      console.error(`Failed to send message to ${message.topic}:`, error);
      throw error;
    }
  }

  /**
   * Send multiple messages (batch)
   */
  async sendBatch(messages: ProduceMessage[]): Promise<RecordMetadata[]> {
    if (!this.isConnected) {
      throw new Error('Producer not connected. Call connect() first.');
    }

    try {
      const batch = messages.map(msg => ({
        topic: msg.topic,
        messages: [{
          key: msg.key,
          value: msg.value,
          headers: msg.headers,
          partition: msg.partition,
        }],
      }));

      const metadata = await this.producer.sendBatch({
        topicMessages: batch,
      });

      console.log(`✓ Batch of ${messages.length} messages sent`);
      return metadata;
    } catch (error) {
      console.error('Failed to send batch messages:', error);
      throw error;
    }
  }

  /**
   * Disconnect from Kafka
   */
  async disconnect(): Promise<void> {
    try {
      await this.producer.disconnect();
      this.isConnected = false;
      console.log('✓ Kafka producer disconnected');
    } catch (error) {
      console.error('Error disconnecting Kafka producer:', error);
      throw error;
    }
  }

  /**
   * Get producer status
   */
  isRunning(): boolean {
    return this.isConnected;
  }
}
