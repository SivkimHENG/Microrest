import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { startConsumer, stopConsumer } from "./events/consumer";
import { router } from "./customer/customer.routes";
import { categoryRouter } from "./admin/category/category.routes";
import { publisherRegistry } from "./events/publisher/publisher.registry";
import { processOutboxEvent } from "./events/publisher/outbox";
import { menuItemRouter } from "./admin/menu/menuItem.routes";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors());
app.use(morgan("combined"));



app.use("/api/v1", router);
app.use("/api/v1/admin", categoryRouter);
app.use("/api/v1/admin", menuItemRouter)




app.listen(PORT, () => {
  console.log(`Listening at http://${process.env.PORT}`);
});




async function start() {
  await startConsumer().catch(console.error);
  await publisherRegistry.startAll().catch(console.error);
  setInterval(processOutboxEvent, 5000);
}
start();


const shutdown = async (signal: string) => {
  console.log(`\n${signal} received, shutting down...`);

  try {
    await stopConsumer();
    process.exit(0);
  } catch (err) {
    console.error("Shutdown error:", err);
    process.exit(1);
  }
}





process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
process.once('SIGUSR2', async () => {
  await shutdown('SIGUSR2');
  process.kill(process.pid, 'SIGUSR2');
});







