const { Schema, model } = require("mongoose");

const Proyectos = Schema({
  numero: {
    type: String,
    required: [true, "El numero es obligatorio"],
    unique: true,
  },
  titulo: {
    type: String,
    required: [true, "El titulo es obligatorio"],
  },
  fechaIniciacion: {
    type: Date,
    default: new Date(),
  },
  fechaEntrega: {
    type: Date,
    required: [true, "La fecha de entrega es obligatoria"],
  },
  valor: {
    type: String,
    default: "0.0",
  },
  fechaCreacion: {
    type: Date,
    default: new Date(),
  },
  fechaActualizacion: {
    type: Date,
    default: new Date(),
  },
  cliente: {
    type: Schema.Types.ObjectId,
    ref: "Clientes",
    required: [true, "El cliente es obligatorio"],
  },
  tipo: {
    type: Schema.Types.ObjectId,
    ref: "TipoProyectos",
    required: [true, "El tipo de proyecto es obligatorio"],
  },
  universidad: {
    type: Schema.Types.ObjectId,
    ref: "Universidad",
    required: [true, "La universidad es obligatoria"],
  },
  etapa: {
    type: Schema.Types.ObjectId,
    ref: "Etapas",
    required: [true, "La etapa del proyecto es obligatoria"],
  },
});

module.exports = model("Proyectos", Proyectos);
