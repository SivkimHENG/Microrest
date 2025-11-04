"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = register;
exports.login = login;
exports.loggedout = loggedout;
exports.refreshToken = refreshToken;
const http_status_codes_1 = require("http-status-codes");
const auth_service_1 = require("../service/auth.service");
async function register(req, res) {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST)
                .json({ message: 'Email and password are required' });
        }
        const meta = {
            ipAddress: req.ip || "0.0.0.0",
            deviceInfo: req.get('User-Agent') || 'unknown',
        };
        const result = await (0, auth_service_1.userRegister)(email, password, meta);
        return res.status(http_status_codes_1.StatusCodes.OK).json({
            message: "User registered successfully",
            data: result
        });
    }
    catch (err) {
        return res.status(http_status_codes_1.StatusCodes.BAD_GATEWAY).json({
            success: false,
            message: err.message || 'Registration failed'
        });
    }
}
async function login(req, res) {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
                message: "Email or Password required"
            });
        }
        const meta = {
            ipAddress: req.ip || "0.0.0.0",
            deviceInfo: req.get('User-Agent') || 'unknown',
        };
        const result = await (0, auth_service_1.authenticated)(email, password, meta);
        return res.status(http_status_codes_1.StatusCodes.OK).json({
            message: "login successfully",
            data: result
        });
    }
    catch (err) {
        return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({
            success: false,
            message: err.message || 'Authenticated failed'
        });
    }
}
async function loggedout(req, res) {
    try {
        const { refreshToken } = req.body;
        if (!refreshToken)
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
                message: "Missing refresh token",
                success: false
            });
        const userId = req.user?.userId;
        if (!userId) {
            return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({
                message: "Unauthorized",
                success: false
            });
        }
        const meta = {
            ipAddress: req.ip || "0.0.0.0",
            deviceInfo: req.get('User-Agent') || 'unknown',
        };
        const result = await (0, auth_service_1.logout)(refreshToken, userId, meta);
        return res.status(http_status_codes_1.StatusCodes.OK).json({
            message: "Logout successfully",
            success: true,
            data: result
        });
    }
    catch (err) {
        console.error("Logout controller error:", err);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
            message: "Logout failed",
            success: false,
            error: err.message,
        });
    }
}
async function refreshToken(req, res) {
    try {
        const { refreshToken } = req.body;
        if (!refreshToken)
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
                message: "Missing refresh token",
                success: false
            });
        const meta = {
            ipAddress: req.ip || "0.0.0.0",
            deviceInfo: req.get('User-Agent') || 'unknown',
        };
        const result = await (0, auth_service_1.refreshNewToken)(refreshToken, meta);
        return res.status(http_status_codes_1.StatusCodes.OK).json({
            message: "Token refreshed successfully",
            success: true,
            data: result
        });
    }
    catch (err) {
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: err.message,
            message: "Token refresh failed",
            success: false
        });
    }
}
