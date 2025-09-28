import express from "express"
import sequelize from "./utils/db.js"
import cors from "cors"

import { Customer, Table, Reservation } from "./model/index.js";


const app = express()
app.use(express.json())
app.use(cors())

const PORT  = 5000



const start  = async () => {
    try{
        await sequelize.authenticate();
        console.log("Database Connection");

        await sequelize.sync({ force: true});
        console.log("All the table Synced")
    } catch (error) {
        console.error("Sync error:", error)

    }

}

start();

app.use("/", router)


app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`)
})