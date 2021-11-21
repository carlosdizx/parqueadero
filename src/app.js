const express = require("express");
const indexRouter = require("./routes/index.routes");

const app = express();

app.use(indexRouter);

module.exports = app;
