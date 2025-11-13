import express from "express";


const PORT = 5003;
const app = express();


app.use(express.json())
app.use(express.urlencoded({ extended: true }))




app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
});
