"use strict";

const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  tipoProyectoSchema = Schema({
    nombre: {
      type: String,
      required: true,
      enum: [
        "ENSAYO",
        "ARTICULO",
        "MONOGRAFIA",
        "TRABAJO FINAL DE GRADO",
        "TRABAJO FINAL DE ESPECIALIZACION",
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

module.exports = mongoose.model("TipoProyectos", tipoProyectoSchema);
