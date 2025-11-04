import { Kafka, logLevel } from "kafkajs";



const brokers = process.env.KAFKA_BROKER?.split(",") || ["localhost:9092"];
const clientId = "auth-service";

export const kafka = new Kafka({
  clientId,
  brokers,
  logLevel: logLevel.INFO
});





