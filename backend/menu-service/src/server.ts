import express from "express";
import { menuRouter } from "./menus/menu.routes";


const PORT = 5003;
const app = express();


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/v1/menu", menuRouter);


app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
});



