import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { startConsumer, stopConsumer } from "./events/consumer";
import { router } from "./customer/customer.routes";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors());
app.use(morgan("combined"));



app.use("/api/v1", router);




app.listen(PORT, () => {
  console.log(`Listening at http://${process.env.PORT}`);
});


startConsumer().catch(console.error);


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







