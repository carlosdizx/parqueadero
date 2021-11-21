const express = require("express");
const puestos = require("../models/puesto");

const puestosRouter = express.Router();

puestosRouter.get("/", async (req, res) => {
  const listado = await puestos.find();
  console.log(listado);
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json(listado);
});

module.exports = puestosRouter;
