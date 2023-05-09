const express = require("express"),
  morgan = require("morgan"),
  dotenv = require("dotenv").config(),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  port = process.env.PORT || 5000,
  app = express();

// Configuración de la aplicación
app.set("port", port);

// Middlewares
app
  .use(bodyParser.urlencoded({ extended: false }))
  .use(morgan("dev"))
  .use(
    cors({
      origin: "*",
    })
  );

// Rutas

module.exports = app;
