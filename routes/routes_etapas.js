const {
  createEtapa,
  readEtapas,
  updateEtapa,
} = require("../controllers/ctrl_etapas");

const { Router } = require("express"),
  routes = Router();

routes.get("/", readEtapas).post("/", createEtapa).put("/:id", updateEtapa);

module.exports = routes;
