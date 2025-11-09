"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerService = void 0;
const database_1 = require("../database");
const prisma_1 = require("../../generated/prisma");
class CustomerService {
    async getProfile(userUuid, payload, meta) {
        try {
            const result = await database_1.prisma.$transaction(async (tx) => {
                const profile = await tx.userProfiles.findUnique({
                    where: {
                        userUuid,
                        ...payload
                    },
                });
                if (!profile) {
                    await tx.userActivityLog.create({
                        data: {
                            success: false,
                            message: "Profile doesn't existed in database",
                            action: "PROFILE_FAILED",
                            ip_address: meta.ipAdress,
                            user_agent: meta.userAgent,
                            userProfileId: payload.userId ?? null,
                        }
                    });
                }
                return profile;
            });
            return result;
        }
        catch (err) {
            console.error(err.message);
            await database_1.prisma.userActivityLog.create({
                data: {
                    success: false,
                    message: "Failed to query",
                    action: "PROFILE_FAILED_QUERY",
                    ip_address: meta.ipAdress,
                    user_agent: meta.userAgent,
                    userProfileId: payload.userId ?? null,
                }
            });
        }
    }
    async updateProfile(userUuid, payload, meta) {
        try {
            const result = await database_1.prisma.$transaction(async (tx) => {
                if (!userUuid) {
                    await tx.userActivityLog.create({
                        data: {
                            success: false,
                            message: "Required userUuid ",
                            action: "REQUIRED_USERUUID",
                            ip_address: meta.ipAdress,
                            user_agent: meta.userAgent,
                            userProfileId: payload.userId ?? null,
                        }
                    });
                }
                const updated = database_1.prisma.userProfiles.update({
                    where: {
                        userUuid: userUuid,
                    },
                    data: {
                        username: payload.username,
                        profileUrl: payload.profileUrl,
                        bio: payload.bio,
                        phoneNumber: payload.phoneNumber,
                        statuses: [prisma_1.Status.ACTIVE]
                    }
                });
                await database_1.prisma.userActivityLog.create({
                    data: {
                        success: true,
                        message: "Profile update successfully",
                        action: "UPDATED_PROFILE_SUCCESSED",
                        ip_address: meta.ipAdress,
                        user_agent: meta.userAgent,
                        userProfileId: payload.userId ?? null,
                    }
                });
                return updated;
            });
            return result;
        }
        catch (err) {
            console.error(err.message);
            await database_1.prisma.userActivityLog.create({
                data: {
                    success: false,
                    message: "Failed to update profile",
                    action: "UPDATED_FAILED",
                    ip_address: meta.ipAdress,
                    user_agent: meta.userAgent,
                    userProfileId: payload.userId ?? null,
                }
            });
        }
    }
}
exports.customerService = new CustomerService();
