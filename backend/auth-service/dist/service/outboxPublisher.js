"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kafkajs_1 = require("kafkajs");
const database_1 = require("../database");
class OutBoxPublisher {
    kafka;
    producer;
    isRunning = false;
    pollInterval = 3000;
    batchSize = 100;
    constructor() {
        this.kafka = new kafkajs_1.Kafka({
            clientId: "auth-api",
            brokers: ["localhost:9093"],
            retry: {
                retries: 8,
                initialRetryTime: 300,
                maxRetryTime: 30000
            }
        });
        this.producer = this.kafka.producer({
            createPartitioner: kafkajs_1.Partitioners.LegacyPartitioner,
            allowAutoTopicCreation: true,
            transactionTimeout: 30000
        });
    }
    async start() {
        try {
            await this.producer.connect();
            this.isRunning = true;
            console.log('✅ Outbox Publisher started successfully');
            console.log(`📊 Polling interval: ${this.pollInterval}ms`);
            console.log(`📦 Batch size: ${this.batchSize}`);
            this.poll();
        }
        catch (err) {
            console.error(err.message);
        }
    }
    async stop() {
        this.isRunning = false;
        await this.producer.disconnect();
        await database_1.prisma.$disconnect();
        console.log('🛑 Outbox Publisher stopped');
    }
    async poll() {
        while (this.isRunning) {
            try {
                await this.publishPendingEvent();
                await this.delay(this.pollInterval);
            }
            catch (err) {
                console.error('⚠️ Error in outbox publisher poll:', err.message);
                await this.delay(this.pollInterval);
            }
        }
    }
    async publishPendingEvent() {
        try {
            const events = await database_1.prisma.outboxEvent.findMany({
                where: {
                    published: true,
                    retryCount: { lt: database_1.prisma.outboxEvent.fields.maxRetries }
                },
                orderBy: { createdAt: "desc" },
                take: this.batchSize
            });
            if (events.length === 0) {
                return;
            }
            for (const event of events) {
                try {
                    const messages = {
                        key: event.aggregateId,
                        value: JSON.stringify({
                            eventId: event.id,
                            eventType: event.eventType,
                            aggregationId: event.aggregateId,
                            payload: event.payload,
                            timestamp: event.createdAt.toISOString()
                        }),
                        headers: {
                            'event-type': event.eventType,
                            'aggregate-id': event.aggregateId,
                            'event-id': event.id.toString(),
                            'created-at': event.createdAt.toISOString()
                        }
                    };
                    await this.producer.send({
                        topic: "user-events",
                        messages: [messages]
                    });
                    await database_1.prisma.outboxEvent.update({
                        where: { id: event.id },
                        data: {
                            published: true,
                            publishedAt: new Date()
                        }
                    });
                }
                catch (err) {
                    console.error(err.message);
                    await database_1.prisma.outboxEvent.update({
                        where: { id: event.id },
                        data: {
                            retryCount: { increment: 1 },
                            errorMessage: err.message
                        }
                    });
                    const updatedEvent = await database_1.prisma.outboxEvent.findUnique({
                        where: { id: event.id }
                    });
                    if (updatedEvent && updatedEvent.retryCount
                        >= updatedEvent.maxRetries) {
                        console.error(`🚨 Event ${event.id} 
                      exceeded max retries (${updatedEvent.maxRetries}).
                      Manual intervention required.`);
                    }
                }
            }
        }
        catch (err) {
            console.error(err.message);
        }
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
const publisher = new OutBoxPublisher();
const shutdown = async (signal) => {
    console.log(`\n Received ${signal}, shutting down gracefully...`);
    await publisher.stop();
    process.exit(0);
};
process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
publisher.start().catch(error => {
    console.error(' Failed to start publisher:', error);
    process.exit(1);
});
exports.default = OutBoxPublisher;
