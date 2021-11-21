const express = require("express");
const registros = require("../models/registro");

const registrosRouter = express.Router();

registrosRouter
  .route("/")
  .get(async (req, res) => {
    const listado = await registros.find();
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(listado);
  })
  .post(async (req, res) => {
    const registro = await registros.create(req.body);
    res.statusCode = 201;
    res.setHeader("Content-Type", "application/json");
    res.json(registro);
  });

registrosRouter
  .route("/:id")
  .get(async (req, res) => {
    const registro = await registros.findById(req.params.id);
    if (registro) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(registro);
    } else {
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.json(`No existe el registro: ${req.params.id}`);
    }
  })
  .put(async (req, res) => {
    const registro = await registros.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (registro) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(registro);
    } else {
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.json(`No existe el registro: ${req.params.id}`);
    }
  })
  .delete(async (req, res) => {
    const registro = await registros.findByIdAndRemove(req.params.id);
    if (registro) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json("Registro eliminado");
    } else {
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.json(`No existe el registro: ${req.params.id}`);
    }
  });

module.exports = registrosRouter;
