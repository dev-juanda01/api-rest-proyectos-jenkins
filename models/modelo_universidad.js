const { Schema, model } = require("mongoose");

const Universidad = Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },
  direccion: {
    type: String,
    required: [true, "La dirección es obligatoria"],
  },
  telefono: {
    type: String,
    required: [true, "El telefono es obligatorio"],
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

module.exports = model("Universidad", Universidad);
