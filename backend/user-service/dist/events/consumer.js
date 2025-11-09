"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startConsumer = startConsumer;
exports.stopConsumer = stopConsumer;
const kafka_1 = require("../config/kafka");
const event_registry_1 = require("./event.registry");
const message_transformer_1 = require("./message.transformer");
async function startConsumer() {
    try {
        await kafka_1.consumer.connect();
        await kafka_1.consumer.subscribe({ topic: "auth.user.event", fromBeginning: false });
        await kafka_1.consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                try {
                    const raw = JSON.parse(message.value.toString());
                    console.log('📥 Received event:', JSON.stringify(raw, null, 2));
                    console.log('📋 Event type:', raw.type);
                    const handler = event_registry_1.EVENT_HANDLERS[raw.type];
                    console.log('🎯 Handler found:', !!handler);
                    if (!handler) {
                        console.log(`❌ No handler for event type: "${raw.type}"`);
                        console.log('📚 Available handlers:', Object.keys(event_registry_1.EVENT_HANDLERS));
                        return;
                    }
                    const transformed = (0, message_transformer_1.transformAuthEvent)(raw);
                    console.log(transformed);
                    const result = await handler(transformed?.eventId, transformed?.payload);
                }
                catch (err) {
                    console.error("✗ ERROR:", err.message);
                    console.error("Stack:", err.stack);
                }
            }
        });
    }
    catch (err) {
        console.error("✗ FATAL ERROR starting consumer:", err.message);
        console.error("Stack:", err.stack);
        throw err;
    }
}
async function stopConsumer() {
    await kafka_1.consumer.disconnect();
    console.log("Consumer disconnected");
}
