const express = require("express");

const indexRouter = express.Router();

indexRouter.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json([]);
});

module.exports = indexRouter;
