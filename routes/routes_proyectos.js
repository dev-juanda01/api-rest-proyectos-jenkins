const {
  createProyecto,
  readProyectos,
  updateProyecto,
} = require("../controllers/ctrl_proyectos");

const { Router } = require("express"),
  routes = Router();

routes
  .get("/", readProyectos)
  .post("/", createProyecto)
  .put("/:id", updateProyecto);

module.exports = routes;
