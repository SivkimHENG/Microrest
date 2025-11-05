"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.producer = void 0;
exports.startProducer = startProducer;
exports.stopProducer = stopProducer;
const kafkajs_1 = require("kafkajs");
const kafka_config_1 = require("../config/kafka.config");
exports.producer = kafka_config_1.kafka.producer({
    createPartitioner: kafkajs_1.Partitioners.DefaultPartitioner,
    idempotent: true,
    maxInFlightRequests: 5,
    retry: { retries: 5 }
});
async function startProducer() {
    try {
        await exports.producer.connect();
        console.log("Producer connecting");
    }
    catch (err) {
        console.error(err.message);
    }
}
async function stopProducer() {
    await exports.producer.disconnect();
}
