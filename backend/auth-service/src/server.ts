import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import './config/passport.config'
import router from "./routes/auth.router";
import passport from "passport";
import morgan from "morgan";
import { startProducer } from "./kafka/producer.kafka";
import { proccessOutboxEvents } from "./service/outbox.service";


const app = express();


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }))

app.use(passport.initialize());

app.use(morgan("combined"));



(async function start() {
  await startProducer();

  setInterval(proccessOutboxEvents, 5000);
})()




app.use("/api/v1/auth", router);


const port = process.env.PORT || 5001;

app.listen(port, function() {
  console.log(`Listening at http://localhost:${port}`);
});




