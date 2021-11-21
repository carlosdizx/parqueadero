const express = require("express");
const indexRouter = require("./routes/index.routes");
const logger = require("morgan");

const app = express();

app.use(express.json());
app.use(logger("dev"));

app.use(indexRouter);

module.exports = app;
