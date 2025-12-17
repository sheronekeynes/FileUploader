import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));



app.listen(port, (err) => {
  if (err) {
    console.log("oops something went wrong");
    return;
  }
  console.log("Server started successfully at port:", port);
});
