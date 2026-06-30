import express, { Application } from "express";
import logger from "morgan";
import "dotenv/config";
import { connectDB } from "./config/db.js";

const app: Application = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(logger("dev"));
app.use(express.json);

app.use(function (req, res, next) {
  res.status(404).send({
    message: "Route not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server up and running on http://localhost:${PORT}...`);
});
