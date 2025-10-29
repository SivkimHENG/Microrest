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
// Make sure you have this in your .env file:
// JWT_SECRET=your-super-secret-key-here
// JWT_ACCESS_EXPIRY=15m (or whatever you want)
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
        expiresIn: process.env.JWT_ACCESS_EXPIRY || '15m',
        issuer: 'microrest',
        audience: 'your-app-users'
    });
    return token;
}
// Optional: Function to verify tokens
function verifyAccessToken(token) {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET is not defined in environment variables');
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, secret);
        return decoded;
    }
    catch (err) {
        throw new Error('Invalid or expired token');
    }
}
// Optional: Generate refresh token (if you want JWT-based refresh tokens)
function generateRefreshToken(payload) {
    const secret = process.env.JWT_REFRESH_SECRET || process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET is not defined in environment variables');
    }
    const token = jsonwebtoken_1.default.sign({ userUuid: payload.userUuid }, secret, {
        expiresIn: '7d'
    });
    return token;
}
function verifyRefreshToken(token) {
    const secret = process.env.JWT_REFRESH_SECRET;
    if (!secret) {
        throw new Error('JWT_REFRESH_SECRET is not defined in environment variables');
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, secret);
        return { userId: decoded.userId };
    }
    catch (err) {
        throw new Error("Invalid or expired refresh token");
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
