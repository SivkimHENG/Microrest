import { Kafka, logLevel, Partitioners } from "kafkajs";

const brokers = process.env.KAFKA_BROKER?.split(",") || ["localhost:9092"];
const clientId = "user-service";


export const kafka = new Kafka({
  clientId,
  brokers,
  logLevel: logLevel.INFO,
  retry: {
    initialRetryTime: 300,
    retries: 8,
    maxRetryTime: 30000,
    multiplier: 2
  },
  connectionTimeout: 10000,
  requestTimeout: 30000,

});


export const producer = kafka.producer({
  allowAutoTopicCreation: true,
  transactionTimeout: 30000,
});

export const consumer = kafka.consumer({
  groupId: "user-service-group",
  sessionTimeout: 30000,
  rebalanceTimeout: 60000,
  heartbeatInterval: 3000,
  maxWaitTimeInMs: 5000,
  allowAutoTopicCreation: false,
  retry: {
    retries: 5,
    initialRetryTime: 300
  }

});



