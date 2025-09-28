import express from "express"
import sequelize from "./utils/db.js"
import cors from "cors"
import { router  } from "./routes/index.js"



const app = express()
app.use(express.json())
app.use(cors())

const PORT  = 5000



sequelize.authenticate()
.then(() => console.log("Database connected"))
.catch(err => console.error("Database error Something went wrong", err.message));

// sequelize.sync({ alter: true })
//   .then(() => console.log("Models synced"))
//   .catch(err => console.error("Sync error:", err));


app.use("/", router)



app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`)
})