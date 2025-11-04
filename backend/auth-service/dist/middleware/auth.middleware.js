"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasRole = exports.authenticate = exports.isNotAuthenticated = exports.isAuthenticated = void 0;
const http_status_codes_1 = require("http-status-codes");
const passport_1 = __importDefault(require("passport"));
const isAuthenticated = (req, res, next) => {
    try {
        if (req.isAuthenticated())
            return next();
        res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({
            message: "Unauthorized - Please login in"
        });
    }
    catch (err) {
        res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({
            message: "Unauthorized - Please login in"
        });
    }
};
exports.isAuthenticated = isAuthenticated;
const isNotAuthenticated = (req, res, next) => {
    try {
        if (!req.isAuthenticated())
            return next();
        res.status(http_status_codes_1.StatusCodes.FORBIDDEN).json({
            message: "Already authenticated"
        });
    }
    catch (err) {
        res.status(http_status_codes_1.StatusCodes.FORBIDDEN).json({
            message: "Already authenticated"
        });
    }
};
exports.isNotAuthenticated = isNotAuthenticated;
const authenticate = (req, res, next) => {
    passport_1.default.authenticate('jwt', { session: false }, (err, user, info) => {
        if (err)
            return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: "Authentication error"
            });
        if (!user)
            return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({
                message: "User Unauthorized"
            });
        req.user = user;
        next();
    })(req, res, next);
};
exports.authenticate = authenticate;
const hasRole = (...roles) => {
    return (req, res, next) => {
        if (!req.isAuthenticated())
            return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({
                message: "Unauthorized"
            });
        const user = req.user;
        const userRoles = user.roles || [];
        const hasRequiredRole = roles.some(role => userRoles.includes(role));
        if (hasRequiredRole)
            return next();
        return res.status(http_status_codes_1.StatusCodes.FORBIDDEN).json({
            message: "Forbidden - Insufficient Permission"
        });
    };
};
exports.hasRole = hasRole;
