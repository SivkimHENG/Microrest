"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kafka = void 0;
const kafkajs_1 = require("kafkajs");
const brokers = process.env.KAFKA_BROKER?.split(",") || ["localhost:9092"];
const clientId = "auth-service";
exports.kafka = new kafkajs_1.Kafka({
    clientId,
    brokers,
    logLevel: kafkajs_1.logLevel.INFO
});
