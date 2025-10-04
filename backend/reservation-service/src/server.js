import express from "express"
import sequelize from "./utils/db.js"
import cors from "cors"
import { Customer, Table, Reservation } from "./model/index.js";
import morgan from "morgan";
import { customerRouter } from "./routes/customer.router.js";
import { tableRouter } from "./routes/table.router.js";
import { reservationRouter } from "./routes/reservation.router.js";


const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan("combined"))

app.use(express.urlencoded({ extended: true }))

const PORT = 5000


//const start = async () => {
//  try {
//    await sequelize.authenticate();
//    console.log("Database Connection");
//
//    await sequelize.sync({ force: true });
//    console.log("All the table Synced")
//  } catch (error) {
//    console.error("Sync error:", error)
//
//  }
//
//}
//start();



app.use("/api/v1/customers", customerRouter);
app.use("/api/v1/tables", tableRouter);
app.use("/api/v1/reservation", reservationRouter);


app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})
