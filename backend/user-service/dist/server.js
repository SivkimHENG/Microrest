"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const consumer_1 = require("./events/consumer");
const customer_routes_1 = require("./customer/customer.routes");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("combined"));
app.use("/api/v1", customer_routes_1.router);
app.listen(PORT, () => {
    console.log(`Listening at http://${process.env.PORT}`);
});
(0, consumer_1.startConsumer)().catch(console.error);
const shutdown = async (signal) => {
    console.log(`\n${signal} received, shutting down...`);
    try {
        await (0, consumer_1.stopConsumer)();
        process.exit(0);
    }
    catch (err) {
        console.error("Shutdown error:", err);
        process.exit(1);
    }
};
process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
process.once('SIGUSR2', async () => {
    await shutdown('SIGUSR2');
    process.kill(process.pid, 'SIGUSR2');
});
