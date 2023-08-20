const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const dotenv = require("dotenv");
dotenv.config();
const { APP_PORT, MONGO_URL } = process.env;
const routes = require("./routes");
const mongoose = require("mongoose");
const chalk = require("chalk");
const bodyParser = require("body-parser");
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
