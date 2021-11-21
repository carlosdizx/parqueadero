const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const puestoSchema = new Schema(
  {
    placa: { type: String },
    propietario: { type: String },
    inicio: { type: String },
  },
  {
    timestamps: true,
  }
);

const puestos = mongoose.model("puestos", puestoSchema);

module.exports = puestos;
