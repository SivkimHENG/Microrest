
import { SchemaRegistry } from "@kafkajs/confluent-schema-registry";


export const registry = new SchemaRegistry({
  host: process.env.URL || "http://localhost:5003"
});



