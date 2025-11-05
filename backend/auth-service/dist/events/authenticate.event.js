"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAuthenticated = userAuthenticated;
const producer_kafka_1 = require("../kafka/producer.kafka");
async function userAuthenticated(event) {
    await producer_kafka_1.producer.send({
        topic: "auth.user.event",
        messages: [{
                key: event.user_uuid,
                value: JSON.stringify(event),
                headers: {
                    "event-type": event.type,
                    "event-version": event.version.toString(),
                    "event-id": event.event_id,
                    "occurred-at": event.occurred_at,
                }
            }]
    });
    console.log(' Login event sent to Kafka');
}
