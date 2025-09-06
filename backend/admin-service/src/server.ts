import express from "express"
import path from "path"
import { fileURLToPath } from "node:url";
import router from "./auth/auth.routes";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;




app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../public/views/"));
app.use(express.static(path.join(__dirname, "../public")));




app.use("/auth", router);

app.use("/", (req, res) => {
  res.render("index");
})
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});










