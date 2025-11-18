"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const categoryConsumer_1 = require("./consumer/categoryConsumer");
const menu_items_consumer_1 = require("./consumer/menu-items.consumer");
class EventRegistry {
    consumers = [
        new categoryConsumer_1.CategoryConsumer(),
        new menu_items_consumer_1.MenuItemsConsumer(),
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
(async () => {
    const eventRegistry = new EventRegistry();
    await eventRegistry.startAll();
    process.on("SIGINT", async () => {
        await eventRegistry.stopAll();
    });
})();
