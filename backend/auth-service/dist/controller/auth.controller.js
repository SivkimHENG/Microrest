"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = register;
exports.login = login;
exports.loggedout = loggedout;
exports.refreshedToken = refreshedToken;
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
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({
                message: "Missing is invalid Authorization headers "
            });
        }
        const token = authHeader.split(" ")[1];
        const { refreshToken } = req.body;
        if (!refreshToken) {
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
                message: "Missing refresh token",
            });
        }
        const userId = req.user?.userId;
        if (!userId) {
            res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
                message: "Unauthorized",
            });
        }
        const meta = {
            ipAddress: req.ip || "0.0.0.0",
            deviceInfo: req.get('User-Agent') || 'unknown',
        };
        await (0, auth_service_1.logout)(refreshToken, userId, meta);
        return res.status(http_status_codes_1.StatusCodes.OK).json({
            message: "Logout successfully",
            success: true
        });
    }
    catch (err) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({ error: err.message });
    }
}
async function refreshedToken(req, res) {
    try {
        const { refreshToken } = req.body;
        const meta = {
            ipAddress: req.ip || "0.0.0.0",
            deviceInfo: req.get('User-Agent') || 'unknown',
        };
        const token = await (0, auth_service_1.refreshNewToken)(refreshToken, meta);
        if (!token)
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
                message: "Token undefined or invalid"
            });
        return res.status(http_status_codes_1.StatusCodes.OK).json({
            message: "User successfully refreshed token",
            success: true,
            data: {
                accessToken: token.accessToken,
                refreshToken: token.refreshToken
            }
        });
    }
    catch (err) {
        if (err.message === 'User not found' ||
            err.message === 'Refresh token invalid or already used' ||
            err.message === 'Refresh Token invalid') {
            return res.status(401).json({
                success: false,
                message: 'Invalid or expired refresh token'
            });
        }
        if (err.name === 'JsonWebTokenError' ||
            err.name === 'TokenExpiredError') {
            return res.status(401).json({
                success: false,
                message: 'Invalid or expired refresh token'
            });
        }
        console.error('Refresh token error:', err);
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}
