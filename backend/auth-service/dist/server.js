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
const producer_kafka_1 = require("./kafka/producer.kafka");
const outbox_service_1 = require("./service/outbox.service");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(passport_1.default.initialize());
app.use((0, morgan_1.default)("combined"));
(async function start() {
    await (0, producer_kafka_1.startProducer)();
    setInterval(outbox_service_1.proccessOutboxEvents, 5000);
})();
app.use("/api/v1/auth", auth_router_1.default);
const port = process.env.PORT || 5001;
app.listen(port, function () {
    console.log(`Listening at http://localhost:${port}`);
});
