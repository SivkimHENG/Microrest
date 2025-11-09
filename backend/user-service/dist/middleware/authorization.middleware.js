"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizate = authorizate;
const http_status_codes_1 = require("http-status-codes");
function authorizate(...roles) {
    return (req, res, next) => {
        if (!req.user) {
            res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({
                error: "Unauthorized request from user"
            });
            return;
        }
        const hasRoles = roles.some(role => req.user.roles.includes(role));
        if (hasRoles) {
            console.warn(`❌ Access denied: ${req.user.userUuid}. Required: [${roles}], Has: [${req.user.roles}]`);
            res.status(403).json({ error: 'Forbidden - insufficient permissions' });
            return;
        }
        next();
    };
}
