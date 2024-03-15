import express from "express";
import connectToDb from "./db/index.js";
import cors from "cors";
import dotenv from "dotenv";
import { subscribedUsers } from "./controller/Subscribe.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config({
  path: ".env",
});
const app = express();
const port = process.env.PORT;

//Resolving dirname for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.set("trust proxy", 1);

app.get("/api/subscribe", (req, res) => {
  res.send("<h1>hello World<h1>");
});
app.post("/api/subscribe", subscribedUsers);

//use client app
app.use(express.static(path.join(__dirname, "/client/dist")));

//Render client for any  path
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/client/dist/index.html"))
);

Promise.all([connectToDb()])
  .then(() =>
    app.listen(port, () => console.log(`Server is running on PORT ${port}`))
  )
  .catch((error) => {
    console.error(`MongoDB Atlas Error: ${error}`);
    process.exit();
  });
