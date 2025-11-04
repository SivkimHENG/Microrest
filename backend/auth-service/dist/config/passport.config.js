"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_jwt_1 = require("passport-jwt");
const passport_local_1 = require("passport-local");
const database_1 = require("../database");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwtOptions = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET || "",
    issuer: "auth-service",
    audience: "client",
    algorithms: ["HS256"],
    ignoreExpiration: false,
};
passport_1.default.use(new passport_jwt_1.Strategy(jwtOptions, async (payload, done) => {
    try {
        const user = await database_1.prisma.userCredential.findUnique({
            where: { id: payload.userId },
            include: { roles: true }
        });
        if (!user)
            return done(null, false);
        return done(null, {
            userId: user.id,
            userUuid: user.userUuid,
            roles: user.roles.map(r => r.role)
        });
    }
    catch (err) {
        console.error("Failed to JWT verfication ", err);
        return done(err, false);
    }
}));
passport_1.default.use(new passport_local_1.Strategy({
    usernameField: "email",
    passwordField: "password"
}, async (email, password, done) => {
    try {
        const user = await database_1.prisma.userCredential.findUnique({
            where: { email: email },
            include: { roles: true }
        });
        if (!user)
            return done(null, false, { message: "Invalid Email or Password" });
        const isPasswordValid = await bcrypt_1.default.compare(password, user.passwordHash);
        if (!isPasswordValid)
            return done(null, false, { message: "Invalid Email or Password" });
        return done(null, {
            userId: user.id,
            userUuid: user.userUuid,
            roles: user.roles.map(r => r.role)
        });
    }
    catch (err) {
        console.error("Passport failed:", err);
        return done(err);
    }
}));
passport_1.default.serializeUser((user, done) => {
    done(null, user.userUuid);
});
passport_1.default.deserializeUser(async (userUuid, done) => {
    try {
        const user = await database_1.prisma.userCredential.findUnique({
            where: {
                userUuid,
            },
            include: { roles: true }
        });
        if (!user)
            return done(null, false);
        done(null, {
            userId: user?.id,
            userUuid: user?.userUuid,
            roles: user?.roles.map(r => r.role)
        });
    }
    catch (err) {
        console.error("Failed to deserialize", err);
        done(err);
    }
});
exports.default = passport_1.default;
