"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRegistrated = userRegistrated;
const producer_kafka_1 = require("../kafka/producer.kafka");
async function userRegistrated(event) {
    await producer_kafka_1.producer.send({
        topic: "auth.user.event",
        messages: [
            {
                key: event.user_id.toString(),
                value: JSON.stringify(event),
                headers: {
                    "event-type": event.type,
                    "event-version": event.version.toString(),
                    "event-id": event.event_id,
                    "occurred-at": event.occurred_at,
                }
            }
        ]
    });
}
