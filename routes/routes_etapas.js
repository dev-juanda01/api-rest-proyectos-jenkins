const { getEtapas } = require("../controllers/ctrl_etapas");

const { Router } = require("express"),
  routes = Router();

routes.get("/:nombre", getEtapas);

module.exports = routes;
