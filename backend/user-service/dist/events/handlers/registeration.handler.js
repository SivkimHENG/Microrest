"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleUserRegistered = handleUserRegistered;
const database_1 = require("../../database");
async function handleUserRegistered(eventId, payload) {
    try {
        const result = await database_1.prisma.$transaction(async (tx) => {
            const processedEvent = await tx.proccessedEvent.findUnique({
                where: { eventId }
            });
            if (processedEvent) {
                console.log(`Event ${eventId} already processed`);
                return { alreadyProcessed: true };
            }
            const existing = await tx.userProfiles.findUnique({
                where: { userUuid: payload.userUuid }
            });
            if (existing) {
                await tx.proccessedEvent.create({
                    data: { eventId, processedAt: new Date() }
                });
                console.log(`User ${payload.userUuid} already exists`);
                return { userExists: true, user: existing };
            }
            const newUser = await tx.userProfiles.create({
                data: {
                    eventId: payload.eventId,
                    userId: payload.userId,
                    userUuid: payload.userUuid,
                    username: payload.email.split("@")[0],
                    email: payload.email,
                    role: payload.roles[0] ?? "CUSTOMER"
                }
            });
            await tx.proccessedEvent.create({
                data: { eventId, processedAt: new Date() }
            });
            console.log(`User ${payload.userUuid} created successfully`);
            return { success: true, user: newUser };
        });
        return result;
    }
    catch (err) {
        console.error('Error in handleUserRegistered:', err.message);
        console.error('Stack:', err.stack);
        throw err;
    }
}
