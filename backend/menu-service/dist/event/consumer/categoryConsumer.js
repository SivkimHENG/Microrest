"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryConsumer = void 0;
const kafka_client_1 = require("../kafka/kafka.client");
const consumer_1 = require("./consumer");
const index_handler_1 = require("./handlers/index.handler");
//Category consumer endpoints
class CategoryConsumer extends consumer_1.BaseConsumer {
    constructor() {
        super(kafka_client_1.kafka, "user.management.event", "menu-service-group");
    }
    async handleMessage(message) {
        try {
            const value = message.value.toString();
            const eventData = JSON.parse(value);
            console.log('=== RAW EVENT DATA ===');
            console.log(JSON.stringify(eventData, null, 2));
            console.log('=====================');
            await (0, index_handler_1.processEvent)(eventData);
        }
        catch (err) {
            console.error(' Error in handleMessage:', {
                message: err.message,
                stack: err.stack
            });
        }
    }
}
exports.CategoryConsumer = CategoryConsumer;
