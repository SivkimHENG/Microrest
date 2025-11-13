"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventRegistry = void 0;
const categoryConsumer_1 = require("./consumer/categoryConsumer");
class EventRegistry {
    consumers = [
        new categoryConsumer_1.CategoryConsumer(),
    ];
    async startAll() {
        for (const consumer of this.consumers) {
            await consumer.connect();
            console.log(`Started consumer: ${consumer.constructor.name}`);
        }
    }
    async stopAll() {
        for (const consumer of this.consumers) {
            await consumer.disconnect();
            console.log(`Stopped consumer: ${consumer.constructor.name}`);
        }
    }
}
exports.EventRegistry = EventRegistry;
