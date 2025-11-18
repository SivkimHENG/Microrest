"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTAuthentication = JWTAuthentication;
exports.requiredRole = requiredRole;
const http_status_codes_1 = require("http-status-codes");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function isValidJwtPayload(payload) {
    return (typeof payload === 'object' &&
        payload !== null &&
        'userId' in payload &&
        'userUuid' in payload &&
        'roles' in payload &&
        typeof payload.userId === 'number' &&
        typeof payload.userUuid === 'string' &&
        Array.isArray(payload.roles));
}
function JWTAuthentication(req, res, next) {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({
                error: 'No token provided'
            });
        }
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        // Validate the decoded payload structure
        if (!isValidJwtPayload(decoded)) {
            return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({
                error: 'Invalid token payload structure'
            });
        }
        req.user = decoded;
        next();
    }
    catch (err) {
        const errorMessage = err.name === 'TokenExpiredError'
            ? 'Token expired'
            : 'Invalid token';
        return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({
            error: errorMessage
        });
    }
}
function requiredRole(allowedRole) {
    return (req, res, next) => {
        // Check if user exists (should be set by JWTAuthentication)
        if (!req.user) {
            return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({
                error: 'Authentication required'
            });
        }
        const userRoles = req.user.roles;
        const hasRoles = allowedRole.some(role => userRoles.includes(role));
        if (!hasRoles) {
            return res.status(http_status_codes_1.StatusCodes.FORBIDDEN).json({
                error: 'Insufficient permissions',
                required: allowedRole,
                userRoles: userRoles
            });
        }
        next();
    };
}
