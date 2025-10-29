"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("./config/passport.config");
const auth_router_1 = __importDefault(require("./routes/auth.router"));
const passport_1 = __importDefault(require("passport"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(passport_1.default.initialize());
app.use((0, morgan_1.default)("combined"));
console.log("hello");
app.use("/api/v1/auth", auth_router_1.default);
app.use((err, req, res, next) => {
    console.error("\n[ERROR] Controller Exception:");
    console.error(`  → Path: ${req.method} ${req.originalUrl}`);
    console.error(`  → Message: ${err.message}`);
    if (err.stack)
        console.error(err.stack);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal Server Error",
    });
});
const port = process.env.PORT || 5001;
app.listen(port, function () {
    console.log(`Listening at http://localhost:${port}`);
});
