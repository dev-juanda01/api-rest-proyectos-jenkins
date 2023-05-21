const {
  createTipoproyecto,
  readTipoproyectos,
  updateTipoproyecto,
} = require("../controllers/ctrl_tipoproyectos");

const { Router } = require("express"),
  routes = Router();

routes
  .get("/", readTipoproyectos)
  .post("/", createTipoproyecto)
  .put("/:id", updateTipoproyecto);

module.exports = routes;
