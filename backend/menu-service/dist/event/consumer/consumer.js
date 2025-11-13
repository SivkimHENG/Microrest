"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseConsumer = void 0;
class BaseConsumer {
    kafka;
    topic;
    groupId;
    consumer;
    constructor(kafka, topic, groupId) {
        this.kafka = kafka;
        this.topic = topic;
        this.groupId = groupId;
        this.consumer = this.kafka.consumer({
            groupId: this.groupId
        });
    }
    async connect() {
        try {
            await this.consumer.connect();
            await this.consumer.subscribe({ topic: this.topic });
            await this.consumer.run({
                eachMessage: async ({ message }) => {
                    this.handleMessage(message);
                }
            });
        }
        catch (err) {
            console.error(err.message);
            throw err;
        }
    }
    async disconnect() {
        await this.consumer.disconnect();
    }
}
exports.BaseConsumer = BaseConsumer;
