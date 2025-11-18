"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItemsConsumer = void 0;
const kafka_client_1 = require("../kafka/kafka.client");
const consumer_1 = require("./consumer");
const index_handler_1 = require("./handlers/index.handler");
//Menu Item Endpoints
class MenuItemsConsumer extends consumer_1.BaseConsumer {
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
            console.log('Processing category:', {
                type: eventData.type,
                eventId: eventData.eventId,
                category: {
                    categoryId: eventData.category.categoryId,
                }
            });
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
exports.MenuItemsConsumer = MenuItemsConsumer;
