const express = require("express");
const puestosRouter = require("./routes/puestos.routes");
const registrosRouter = require("./routes/registros.routes");
const logger = require("morgan");
const mongoose = require("mongoose");

const url = "mongodb://localhost/parqueadero";

const app = express();
mongoose.connect(url, () => console.log("Conectado a MongoDB"));

app.use(express.json());
app.use(logger("dev"));

app.use("/puestos", puestosRouter);
app.use("/registros", registrosRouter);

module.exports = app;
