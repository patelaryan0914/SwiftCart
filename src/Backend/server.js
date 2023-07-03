import express from "express";
const app = express();
import cors from "cors";
app.use(cors());
import dotenv from "dotenv";
dotenv.config();
const { APP_PORT, MONGO_URL } = process.env;
import routes from "./routes/index.js";
import mongoose from "mongoose";
import chalk from "chalk";
import bodyParser from "body-parser";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log(`${chalk.hex("7FFFD4")("Connected to database")}`);
  })
  .catch((e) => console.log(`${chalk.red(e)}`));

app.use(routes);

app.listen(APP_PORT, () => {
  console.log(`${chalk.hex("00FFFF")(`App listening on port ${APP_PORT}`)}`);
});
