const { Schema, model } = require("mongoose");

const Etapas = Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
    enum: [
      "ANTEPROYECTO",
      "ENTREGA PARCIAL 1",
      "ENTREGA PARCIAL 2",
      "ENTREGA PARCIAL 3",
      "ENTREGA FINAL",
    ],
  },
  fechaCreacion: {
    type: Date,
    default: new Date(),
  },
  fechaActualizacion: {
    type: Date,
    default: new Date(),
  },
});

module.exports = model("Etapas", Etapas);
