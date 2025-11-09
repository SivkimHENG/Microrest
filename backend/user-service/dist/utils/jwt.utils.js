"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAccessToken = verifyAccessToken;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_CONFIG = {
    issuer: "auth-service",
    audience: "client",
    accessTokenExpiry: "15m",
    refreshTokenExpiry: "7d"
};
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
