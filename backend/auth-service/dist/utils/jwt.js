"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAccessToken = generateAccessToken;
exports.verifyAccessToken = verifyAccessToken;
exports.generateRefreshToken = generateRefreshToken;
exports.verifyRefreshToken = verifyRefreshToken;
exports.decodeToken = decodeToken;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_CONFIG = {
    issuer: "auth-service",
    audience: "client",
    accessTokenExpiry: "15m",
    refreshTokenExpiry: "7d"
};
function generateAccessToken(payload) {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET is not defined in environment variables');
    }
    const token = jsonwebtoken_1.default.sign({
        userId: payload.userId,
        userUuid: payload.userUuid,
        roles: payload.roles
    }, secret, {
        expiresIn: JWT_CONFIG.accessTokenExpiry,
        issuer: JWT_CONFIG.issuer,
        audience: JWT_CONFIG.audience,
        algorithm: 'HS256'
    });
    return token;
}
function verifyAccessToken(token) {
    const secret = process.env.JWT_SECRET;
    if (!secret)
        throw new Error("JWT_SECRET is not defined is environment");
    try {
        const decoded = jsonwebtoken_1.default.verify(token, secret, {
            issuer: JWT_CONFIG.issuer,
            audience: JWT_CONFIG.audience,
            algorithms: ["HS256"]
        });
        return decoded;
    }
    catch (err) {
        if (err.name === 'TokenExpiredError') {
            throw new Error('TOKEN_EXPIRED');
        }
        if (err.name === 'JsonWebTokenError') {
            throw new Error('INVALID_TOKEN');
        }
        throw new Error('TOKEN_VERIFICATION_FAILED');
    }
}
function generateRefreshToken(payload) {
    const secret = process.env.JWT_REFRESH_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET is not defined in environment variables');
    }
    const token = jsonwebtoken_1.default.sign({
        userId: payload.userId,
        userUuid: payload.userUuid
    }, secret, {
        expiresIn: JWT_CONFIG.refreshTokenExpiry,
        issuer: JWT_CONFIG.issuer,
        audience: JWT_CONFIG.audience,
        algorithm: "HS256"
    });
    return token;
}
function verifyRefreshToken(token) {
    const secret = process.env.JWT_REFRESH_SECRET;
    if (!secret) {
        throw new Error('JWT_REFRESH_SECRET is not defined in environment variables');
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, secret, {
            issuer: JWT_CONFIG.issuer,
            audience: JWT_CONFIG.audience,
            algorithms: ["HS256"]
        });
        return decoded;
    }
    catch (err) {
        if (err.name === 'TokenExpiredError') {
            throw new Error('REFRESH_TOKEN_EXPIRED');
        }
        if (err.name === 'JsonWebTokenError') {
            throw new Error('INVALID_REFRESH_TOKEN');
        }
        throw new Error('REFRESH_TOKEN_VERIFICATION_FAILED');
    }
}
function decodeToken(token) {
    try {
        return jsonwebtoken_1.default.decode(token);
    }
    catch (err) {
        return null;
    }
}
