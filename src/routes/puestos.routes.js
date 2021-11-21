const express = require("express");
const puestos = require("../models/puesto");

const puestosRouter = express.Router();

puestosRouter
  .route("/")
  .get(async (req, res) => {
    const listado = await puestos.find();
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(listado);
  })
  .post(async (req, res) => {
    const puesto = await puestos.create(req.body);
    res.statusCode = 201;
    res.setHeader("Content-Type", "application/json");
    res.json(puesto);
  });

puestosRouter.route("/:id").get(async (req, res) => {
  const puesto = await puestos.findById(req.params.id);
  if (puesto) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(puesto);
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.json("No existe");
  }
});

module.exports = puestosRouter;
