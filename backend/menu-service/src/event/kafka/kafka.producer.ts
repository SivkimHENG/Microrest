import { timeStamp } from "console";
import { kafkaProducer } from "./kafka.client";
import { v4 as uuidv4 } from "uuid";
import { json } from "express";



export async function publishEvent(topic: string, eventName: string, payload: string) {

  const event = {
    id: uuidv4(),
    name: eventName,
    timestamp: new Date().toString(),
    payload
  }

  try {
    await kafkaProducer.send({
      topic,
      messages: [{ key: eventName, value: JSON.stringify(event) }]
    });
    console.log(`[Kafka] published ${eventName} to ${topic}`);
  } catch (err: any) {
    console.error(err);
    throw err;

  }

}

