"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRegister = userRegister;
exports.authenticated = authenticated;
exports.logout = logout;
exports.refreshNewToken = refreshNewToken;
const database_1 = require("../database");
const uuid_1 = require("uuid");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_1 = require("../utils/jwt");
const prisma_1 = require("../../generated/prisma");
async function logAuditEvent(data) {
    try {
        var userId = null;
        if (data.userId) {
            const user = await database_1.prisma.userCredential.findUnique({
                where: {
                    id: data.userId
                },
                select: { id: true }
            });
            userId = user?.id || null;
        }
        await database_1.prisma.auditLog.create({
            data: {
                action: data.action,
                success: data.success,
                ipAddress: data.ipAddress,
                userId
            }
        });
    }
    catch (err) {
        console.error("Failed to log audit Event", err);
    }
}
async function userRegister(email, password, meta) {
    try {
        const userUuid = (0, uuid_1.v4)();
        const hashed = await bcrypt_1.default.hash(password, 12);
        const refreshTokenRaw = (0, uuid_1.v4)();
        const refreshTokenHash = await bcrypt_1.default.hash(refreshTokenRaw, 12);
        const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
        const result = await database_1.prisma.$transaction(async (transaction) => {
            const user = await transaction.userCredential.create({
                data: {
                    email,
                    passwordHash: hashed,
                    userUuid,
                },
            });
            await transaction.refreshToken.create({
                data: {
                    userId: user.id,
                    tokenHash: refreshTokenHash,
                    expiresAt,
                    ipAddress: meta.ipAddress,
                    deviceInfo: meta.deviceInfo ?? null,
                }
            });
            await transaction.userRole.create({
                data: {
                    role: prisma_1.Roles.CUSTOMER,
                    userId: user.id
                }
            });
            await transaction.auditLog.create({
                data: {
                    action: "REGISTER_SUCCESS",
                    success: true,
                    ipAddress: meta.ipAddress,
                    userAgent: meta.deviceInfo ?? null,
                    userId: user.id,
                }
            });
            return transaction.userCredential.findUnique({
                where: {
                    id: user.id
                },
                include: {
                    roles: true,
                    refreshTokens: true,
                    auditLogs: true
                },
            });
        });
        const accessToken = (0, jwt_1.generateAccessToken)({
            userId: result.id,
            userUuid: result.userUuid,
            roles: result.roles.map((r) => r.role)
        });
        return {
            user: result,
            accessToken,
            refreshToken: refreshTokenRaw
        };
    }
    catch (error) {
        console.error('Registration error details:', error);
        console.error('Error code:', error.code);
        console.error('Error meta:', error.meta);
        throw error;
    }
}
async function authenticated(email, password, meta) {
    try {
        const user = await database_1.prisma.userCredential.findUnique({
            where: {
                email: email
            },
            include: {
                roles: true,
                refreshTokens: true
            }
        });
        const isPasswordValid = user ?
            await bcrypt_1.default.compare(password, user.passwordHash)
            : await bcrypt_1.default.compare(password, "$2a$12$dummyhashtopreventtimingattack");
        if (!user || !isPasswordValid) {
            await database_1.prisma.auditLog.create({
                data: {
                    action: "LOGIN_FAILED",
                    success: false,
                    ipAddress: meta.ipAddress,
                    userAgent: meta.deviceInfo ?? null,
                    userId: user?.id ?? null,
                },
            });
            throw new Error("Invalid email or password");
        }
        const refreshTokenRaw = (0, jwt_1.generateRefreshToken)({ userUuid: user.userUuid });
        const refreshTokenHash = await bcrypt_1.default.hash(refreshTokenRaw, 12);
        const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days
        await database_1.prisma.refreshToken.create({
            data: {
                userId: user.id,
                tokenHash: refreshTokenHash,
                expiresAt,
                ipAddress: meta.ipAddress,
                deviceInfo: meta.deviceInfo ?? null,
            },
        });
        const accessToken = (0, jwt_1.generateAccessToken)({
            userId: user.id,
            userUuid: user.userUuid,
            roles: user.roles.map((r) => r.role),
        });
        await database_1.prisma.auditLog.create({
            data: {
                action: "LOGIN_SUCCESS",
                success: true,
                ipAddress: meta.ipAddress,
                userAgent: meta.deviceInfo ?? null,
                userId: user.id,
            },
        });
        return {
            user: {
                userId: user.id,
                userUuid: user.userUuid,
                email: user.email,
                roles: user.roles.map((r) => r.role)
            },
            accessToken,
            refreshToken: refreshTokenRaw
        };
    }
    catch (err) {
        console.error("Login error:", err);
        throw err;
    }
}
async function logout(refreshToken, userId, meta) {
    try {
        const decoded = (0, jwt_1.verifyRefreshToken)(refreshToken);
        if (decoded.userId !== userId) {
            await logAuditEvent({
                action: "LOGOUT FAILED MISMATCH TOKEN",
                success: false,
                ipAddress: meta.ipAddress,
                deviceInfo: meta.deviceInfo,
                userId: userId
            });
            throw new Error("Token does not belong to this user");
        }
        const user = await database_1.prisma.userCredential.findUnique({
            where: {
                id: userId
            },
            include: { roles: true }
        });
        if (!user) {
            await logAuditEvent({
                action: "LOGOUT FAILED",
                success: false,
                ipAddress: meta.ipAddress,
                deviceInfo: meta.deviceInfo,
                userId: userId
            });
            throw new Error("User not found");
        }
        const activeToken = await database_1.prisma.refreshToken.findMany({
            where: {
                userId: user.id,
                expiresAt: { gt: new Date() },
                revokedAt: null,
            }
        });
        if (activeToken.length === 0) {
            await logAuditEvent({
                action: "LOGOUT FAILED NO ACTIVE SESSION",
                success: false,
                ipAddress: meta.ipAddress,
                deviceInfo: meta.deviceInfo,
                userId: user.id
            });
            throw new Error("No active session found");
        }
        let matchedToken = null;
        for (const token of activeToken) {
            const isMatch = await bcrypt_1.default.compare(refreshToken, token.tokenHash);
            if (isMatch) {
                matchedToken = token;
                break;
            }
        }
        if (!matchedToken) {
            await logAuditEvent({
                action: "LOGOUT FAILED INVALID TOKEN",
                success: false,
                ipAddress: meta.ipAddress,
                deviceInfo: meta.deviceInfo,
                userId: user.id
            });
            throw new Error("Invalid refresh token");
        }
        await database_1.prisma.refreshToken.update({
            where: {
                id: matchedToken.id
            },
            data: {
                revokedAt: new Date()
            }
        });
        await logAuditEvent({
            action: "LOGOUT_SUCCESS",
            success: true,
            ipAddress: meta.ipAddress,
            deviceInfo: meta.deviceInfo,
            userId: user.id
        });
        return {
            success: true,
            messasge: "Logged out successfully"
        };
    }
    catch (err) {
        await database_1.prisma.auditLog.create({
            data: {
                action: "LOGOUT_FAILED",
                success: false,
                ipAddress: meta.ipAddress,
                userAgent: meta.deviceInfo ?? null,
                userId: userId
            }
        });
        console.error("Logout error:", err);
        throw err;
    }
}
async function refreshNewToken(refreshToken, meta) {
    try {
        const decoded = (0, jwt_1.verifyRefreshToken)(refreshToken);
        const user = await database_1.prisma.userCredential.findUnique({
            where: { id: decoded.userId },
            include: {
                roles: true,
                refreshTokens: {
                    where: {
                        revokedAt: null,
                        expiresAt: { gt: new Date() }
                    }
                }
            }
        });
        if (!user) {
            await logAuditEvent({
                action: 'REFRESH_TOKEN_FAILED',
                success: false,
                ipAddress: meta.ipAddress,
                deviceInfo: meta.deviceInfo,
                userId: decoded.userId
            });
            throw new Error("User not found for refresh token");
        }
        let validToken = null;
        for (const token of user.refreshTokens) {
            if (await bcrypt_1.default.compare(refreshToken, token.tokenHash)) {
                validToken = token;
                break;
            }
        }
        if (!validToken) {
            await logAuditEvent({
                action: 'REFRESH_TOKEN_REUSE_ATTEMPT',
                success: false,
                ipAddress: meta.ipAddress,
                deviceInfo: meta.deviceInfo,
                userId: user?.id
            });
            throw new Error("Refresh token invalid or already used");
        }
        await database_1.prisma.refreshToken.update({
            where: { id: validToken.id },
            data: { revokedAt: new Date() }
        });
        const roles = user?.roles.map((r) => r.role) ?? [];
        const newAccessToken = (0, jwt_1.generateAccessToken)({ userId: user?.id, userUuid: user?.userUuid, roles });
        const newRefreshToken = (0, jwt_1.generateRefreshToken)({ userUuid: user?.userUuid });
        await database_1.prisma.refreshToken.create({
            data: {
                tokenHash: await bcrypt_1.default.hash(newRefreshToken, 12),
                expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                ipAddress: meta.ipAddress,
                deviceInfo: meta.deviceInfo,
                userId: user?.id
            }
        });
        await logAuditEvent({
            action: 'REFRESH_TOKEN_SUCCESS',
            success: true,
            ipAddress: meta.ipAddress,
            deviceInfo: meta.deviceInfo,
            userId: user?.id
        });
        return {
            accessToken: newAccessToken,
            refreshToken: newRefreshToken
        };
    }
    catch (err) {
        await logAuditEvent({
            action: 'REFRESH_TOKEN_FAILED',
            success: false,
            ipAddress: meta?.ipAddress,
            deviceInfo: meta?.deviceInfo,
            userId: undefined
        });
    }
}
