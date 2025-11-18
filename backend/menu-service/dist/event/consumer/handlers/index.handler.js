"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processEvent = processEvent;
const categoryHandlers_1 = require("./categoryHandlers");
const menu_items_handler_1 = require("./menu-items.handler");
const eventHandlers = {
    'CategoryCreated': categoryHandlers_1.categoryHandlers.create,
    'CategoryUpdated': categoryHandlers_1.categoryHandlers.update,
    'CategoryDeleted': categoryHandlers_1.categoryHandlers.delete,
    'MenuItemCreated': menu_items_handler_1.menuItemHandler.create,
    'MenuItemUpdated': menu_items_handler_1.menuItemHandler.update,
    'MenuItemDeleted': menu_items_handler_1.menuItemHandler.delete
};
async function processEvent(event) {
    const { type } = event;
    const handler = eventHandlers[type];
    if (!handler) {
        console.log(`Proccess event Type: ${type}`);
        return;
    }
    try {
        await handler(event);
        console.log(`Handler for ${type} completed successfully`);
    }
    catch (err) {
        console.error(`Handler for ${type} failed:`, {
            message: err.message,
        });
        throw err;
    }
}
