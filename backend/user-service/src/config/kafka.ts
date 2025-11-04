import { Kafka, logLevel } from "kafkajs";
import { userService } from "../user/user.service";

const brokers = process.env.KAFKA_BROKER?.split(",") || ["localhost:9092"];
const clientId = "user-service";


export const kafka = new Kafka({
  clientId,
  brokers,
  logLevel: logLevel.INFO
});



export const consumer = kafka.consumer({ groupId: "user-service-group" });



