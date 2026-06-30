import express, { type Application } from "express";
import mongoose from "mongoose";
import logger from "morgan";
import "dotenv/config";

const app: Application = express();
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => console.log("Error: ", error));

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
