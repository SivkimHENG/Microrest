"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryConsumer = void 0;
const kafka_client_1 = require("../kafka/kafka.client");
const consumer_1 = require("./consumer");
class CategoryConsumer extends consumer_1.BaseConsumer {
    constructor() {
        super(kafka_client_1.kafka, "user.management.event", "menu-service-group");
    }
    async handleMessage(message) {
        const value = message.value.toString();
        const category = JSON.parse(value);
        console.log('Processing category:', category);
    }
}
exports.CategoryConsumer = CategoryConsumer;
