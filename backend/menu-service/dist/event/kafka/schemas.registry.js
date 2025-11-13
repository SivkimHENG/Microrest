"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registry = void 0;
const confluent_schema_registry_1 = require("@kafkajs/confluent-schema-registry");
exports.registry = new confluent_schema_registry_1.SchemaRegistry({
    host: process.env.URL || "http://localhost:5003"
});
