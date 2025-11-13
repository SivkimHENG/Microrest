import { Kafka, logLevel, Partitioners } from "kafkajs";



export const kafka = new Kafka({
  clientId: "menu-service",
  brokers: [process.env.KAFKA_BROKER || "localhost:9093"],
  logLevel: logLevel.INFO

});


export const kafkaProducer = kafka.producer({
  createPartitioner: Partitioners.DefaultPartitioner
});
export const kafkaConsumer = kafka.consumer({ groupId: "menu-service-group" });


export async function init() {
  await kafkaProducer.connect();
  console.log(`[Kafka] Producer connected`)
}
