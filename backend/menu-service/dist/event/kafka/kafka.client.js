"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kafkaConsumer = exports.kafkaProducer = exports.kafka = void 0;
exports.init = init;
const kafkajs_1 = require("kafkajs");
exports.kafka = new kafkajs_1.Kafka({
    clientId: "menu-service",
    brokers: [process.env.KAFKA_BROKER || "localhost:9093"],
    logLevel: kafkajs_1.logLevel.INFO
});
exports.kafkaProducer = exports.kafka.producer({
    createPartitioner: kafkajs_1.Partitioners.DefaultPartitioner
});
exports.kafkaConsumer = exports.kafka.consumer({ groupId: "menu-service-group" });
async function init() {
    await exports.kafkaProducer.connect();
    console.log(`[Kafka] Producer connected`);
}
