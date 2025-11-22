import { KafkaEventBus } from './kafka-event-bus';



const config = {

  consumer: {
    clientId: "auth-service",
    groupId: "auth-service-group",
    brokers: ["kafka:9092"],
    topics: ["auth.user.event"],
  },
  producer: {
    clientId: "user-service",
    brokers: ["kafka:9092"],

  }

}


export const kafkaEventBus = new KafkaEventBus(config);
export { KafkaEventBus };


export * from './kafka-consumer';
export * from './kafka-producer';
export * from './kafka-event-bus';
