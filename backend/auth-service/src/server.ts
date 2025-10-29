import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import './config/passport.config'
import router from "./routes/auth.router";
import passport from "passport";
import morgan from "morgan";



const app = express();


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }))

app.use(passport.initialize());

app.use(morgan("combined"));


app.use("/api/v1/auth", router);


app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("\n[ERROR] Controller Exception:");
  console.error(`  → Path: ${req.method} ${req.originalUrl}`);
  console.error(`  → Message: ${err.message}`);
  if (err.stack) console.error(err.stack);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});


const port = process.env.PORT || 5001;

app.listen(port, function() {
  console.log(`Listening at http://localhost:${port}`);
});




