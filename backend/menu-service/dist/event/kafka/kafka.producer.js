"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publishEvent = publishEvent;
const kafka_client_1 = require("./kafka.client");
const uuid_1 = require("uuid");
async function publishEvent(topic, eventName, payload) {
    const event = {
        id: (0, uuid_1.v4)(),
        name: eventName,
        timestamp: new Date().toString(),
        payload
    };
    try {
        await kafka_client_1.kafkaProducer.send({
            topic,
            messages: [{ key: eventName, value: JSON.stringify(event) }]
        });
        console.log(`[Kafka] published ${eventName} to ${topic}`);
    }
    catch (err) {
        console.error(err);
        throw err;
    }
}
