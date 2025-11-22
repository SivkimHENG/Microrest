import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { router } from "./customer/customer.routes";
import { Bootstrap } from "./events/bootstrap";
import { KafkaEventBus } from "./events/infrastructure/kafka";
import { EventRegistryService, PublisherRegistryService } from "./events/infrastructure/service";
import { logLevel } from "kafkajs";
import { router as category } from "./events/domain/catalog/router/category.routes";
import { router as menuItem } from "./events/domain/catalog/router/menu-item.routes";




dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors());
app.use(morgan("combined"));



const kafkaConfig = {
  consumer: {
    clientId: "auth-service",
    groupId: "auth-service-group",
    brokers: ["kafka:9092"],
    topics: ["auth.user.event"],
    logLevel: logLevel.DEBUG
  },
  producer: {
    clientId: "user-service",
    brokers: ["kafka:9092"],

  }
}


async function main() {
  const eventBus = new KafkaEventBus(kafkaConfig);
  const eventRegistry = new EventRegistryService();
  const publisherRegistry = new PublisherRegistryService(eventBus);


  const bootstrap = new Bootstrap(eventBus, eventRegistry, publisherRegistry);
  await bootstrap.initialize();

  app.use("/api/v1/user", router);
  app.use("/api/v1/user", category)
  app.use("/api/v1/user", menuItem);

  app.listen(PORT, () => {
    console.log(`Listening at http://${process.env.PORT}`);
  });

}


main().catch((err) => {
  console.error("Fatal bootstrap error:", err);
  process.exit(1);
});

