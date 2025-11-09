"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
const http_status_codes_1 = require("http-status-codes");
const jwt_utils_1 = require("../utils/jwt.utils");
function authMiddleware(req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader?.startsWith("Bearer ")) {
            res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({
                message: "Missing or Invalid token"
            });
            return;
        }
        const token = authHeader.substring(7);
        const decoded = (0, jwt_utils_1.verifyAccessToken)(token);
        req.user = decoded;
        console.log(`Auth: ${decoded.userUuid} with roles: ${decoded.roles.join(',')}`);
        next();
    }
    catch (err) {
        console.error("Auth Error:", err.message);
        res.status(http_status_codes_1.StatusCodes.FORBIDDEN).json({
            error: err.message
        });
    }
}
