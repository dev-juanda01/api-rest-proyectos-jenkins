const { Schema, model } = require("mongoose");

const cliente = Schema({
    nombre: {
      type: String,
      required: [true, "El nombre es obligatorio"],
    },
    email: {
      type: String,
      required: [true, "La dirección es obligatoria"],
    },
    
    
    fechaCreacion: {
      type: Date,
      default: new Date(),
    },
    fechaActualizacion: {
      type: Date,
      default: new Date(),
    },
)};
    
  module.exports = model("cliente", cliente);