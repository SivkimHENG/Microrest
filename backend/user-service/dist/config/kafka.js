"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.consumer = exports.kafka = void 0;
const kafkajs_1 = require("kafkajs");
const brokers = process.env.KAFKA_BROKER?.split(",") || ["localhost:9092"];
const clientId = "user-service";
exports.kafka = new kafkajs_1.Kafka({
    clientId,
    brokers,
    logLevel: kafkajs_1.logLevel.INFO,
    retry: {
        initialRetryTime: 300,
        retries: 8,
        maxRetryTime: 30000,
        multiplier: 2
    },
    connectionTimeout: 10000,
    requestTimeout: 30000,
});
exports.consumer = exports.kafka.consumer({
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
