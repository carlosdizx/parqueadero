const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const registroSchema = new Schema(
  {
    placa: { type: String },
    propietario: { type: String },
    inicio: { type: String },
    fin: { type: String },
  },
  {
    timestamps: true,
  }
);

const registros = mongoose.model("registros", registroSchema);

module.exports = registros;
