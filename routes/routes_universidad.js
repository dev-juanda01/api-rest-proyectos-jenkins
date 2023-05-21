const {
  createUniversidad,
  readUniversidades,
  updateUniversidad,
} = require("../controllers/ctrl_universidad");

const { Router } = require("express"),
  routes = Router();

routes
  .get("/", readUniversidades)
  .post("/", createUniversidad)
  .put("/:id", updateUniversidad);

module.exports = routes;
