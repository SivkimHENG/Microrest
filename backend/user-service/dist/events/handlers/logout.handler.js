"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = logout;
const database_1 = require("../../database");
async function logout(eventId, payload) {
    try {
        const result = await database_1.prisma.$transaction(async (tx) => {
            const processedEvent = await tx.proccessedEvent.findUnique({
                where: { eventId }
            });
            if (processedEvent) {
                console.log(`Event ${eventId} already processed`);
                return { alreadyProcessed: true };
            }
        });
        return result;
    }
    catch (err) {
        console.error(err);
    }
}
