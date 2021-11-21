const express = require("express");
const indexRouter = require("./routes/index.routes");
const logger = require("morgan");
const mongoose = require("mongoose");
const { log } = require("nodemon/lib/utils");

const url = "mongodb://localhost/parqueadero";

const app = express();
mongoose.connect(url, () => console.log("Conectado a MongoDB"));

/**
  "placa":"AUW555",
  "propietario":"108279257"  ,
  "inicio":"2021-11-21 13:25:00"
}
 */

app.use(express.json());
app.use(logger("dev"));

app.use(indexRouter);

module.exports = app;
