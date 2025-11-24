import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import './config/passport.config'
import router from "./routes/auth.router";
import passport from "passport";
import morgan from "morgan";
import { startProducer } from "./kafka/producer.kafka";
import { processOutboxEvents } from "./service/outbox.service";


const app = express();


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }))

app.use(passport.initialize());

app.use(morgan("combined"));


let outboxInterval

async function startServer() {
  try {
    console.log("[Server] Starting...");

    // Initialize Kafka producer
    console.log("[Server] Connecting to Kafka...");
    await startProducer();
    console.log("[Server] Kafka connected successfully");

    // Start outbox processor
    console.log("[Server] Starting outbox processor...");
    outboxInterval = setInterval(async () => {
      try {
        await processOutboxEvents();
      } catch (err: any) {
        console.error("[Server] Outbox processing error:", err.message);
      }
    }, 7000);

    // Start HTTP server
    const server = app.listen(port, () => {
      console.log(`[Server] Listening at http://localhost:${port}`);
      console.log(`[Server] Health check: http://localhost:${port}/health`);
    });


  } catch (err: any) {
    console.error("[Server] Failed to start:", err.message);
    process.exit(1);
  }
}

startServer();


app.use("/api/v1/auth", router);


const port = process.env.PORT || 5001;

app.listen(port, function() {
  console.log(`Listening at http://localhost:${port}`);
});




