"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proccessOutboxEvents = proccessOutboxEvents;
const database_1 = require("../database");
const authenticate_event_1 = require("../events/authenticate.event");
const logout_event_1 = require("../events/logout.event");
const register_event_1 = require("../events/register.event");
const EVENT_EMITTER = {
    UserRegistered: register_event_1.userRegistrated,
    UserAuthenticated: authenticate_event_1.userAuthenticated,
    UserLoggedout: logout_event_1.userLoggedout,
};
async function proccessOutboxEvents() {
    const event = await database_1.prisma.outbox.findMany({
        where: { status: "PENDING" },
        orderBy: { occurredAt: "asc" },
        take: 20,
    });
    for (const evt of event) {
        const handler = EVENT_EMITTER[evt.type];
        if (!handler) {
            console.error(`Unknown event type: ${evt.type} for event ${evt.id}`);
            await database_1.prisma.outbox.update({
                where: { id: evt.id },
                data: { status: "FAILED" }
            });
            continue;
        }
        try {
            await handler(evt.payload);
            await database_1.prisma.outbox.update({
                where: { id: evt.id },
                data: { status: "SENT" }
            });
        }
        catch (err) {
            console.error(`Failed to send event ${evt.id}:`, err);
            await database_1.prisma.outbox.update({
                where: { id: evt.id },
                data: {
                    status: "FAILED",
                }
            });
        }
    }
}
