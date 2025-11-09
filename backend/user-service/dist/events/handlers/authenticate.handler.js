"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleUserAuthenticate = handleUserAuthenticate;
const database_1 = require("../../database");
async function handleUserAuthenticate(eventId, payload) {
    try {
        const result = await database_1.prisma.$transaction(async (tx) => {
            const processedEvent = await tx.proccessedEvent.findUnique({
                where: { eventId }
            });
            if (processedEvent) {
                console.log(`Event ${eventId} already processed`);
                return;
            }
            const existingUser = await tx.userProfiles.findUnique({
                where: { userUuid: payload.userUuid }
            });
            if (!existingUser) {
                console.error(`User ${payload.userUuid} not found`);
                await tx.proccessedEvent.create({
                    data: { eventId, processedAt: new Date() }
                });
                return {
                    success: false,
                    error: "User not found",
                    userUuid: payload.userUuid
                };
            }
            const authenticated = await tx.userProfiles.update({
                where: { userUuid: payload.userUuid },
                data: {
                    userId: payload.userId,
                    loginHistory: {
                        create: {
                            action: "LOGIN_SUCCESS",
                            success: true,
                            lastLoginAt: payload.lastLoginAt,
                            lastLoginIp: payload.ipAddress,
                            ip_address: payload.ipAddress,
                            user_agent: ""
                        }
                    }
                },
                include: {
                    loginHistory: {
                        take: 1,
                        orderBy: { lastLoginAt: "desc" }
                    }
                }
            });
            await tx.proccessedEvent.create({
                data: { eventId, processedAt: new Date() }
            });
            console.log(`✓ User ${payload.userUuid} authenticated successfully`);
            return {
                success: true,
                authenticated,
                lastLoginCount: authenticated.loginHistory
            };
        });
        console.log(result);
        return result;
    }
    catch (err) {
        console.error('Error in handleUserAuthenticated:', err.message);
        console.error('Stack:', err.stack);
        throw err;
    }
}
