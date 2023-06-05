const Proyectos = require("../models/modelo_proyectos");
const Clientes = require("../models/modelo_cliente");
const TipoProyectos = require("../models/modelo_tipoproyecto");
const Universidad = require("../models/modelo_universidad");
const Etapas = require("../models/modelo_etapas");

const readProyectos = async (req, res) => {
  try {
    const proyectos = await Proyectos.find()
      .populate({
        path: "cliente",
      })
      .populate({
        path: "tipo",
      })
      .populate({
        path: "universidad",
      })
      .populate({
        path: "etapa",
      });

    if (proyectos.length === 0)
      return res.status(404).send({ msg: "No hay proyectos registrados" });

    return res.status(200).send({ proyectos: proyectos });
  } catch (error) {
    return res.status(500).send({ msg: `Error: ${error}` });
  }
};

const createProyecto = async (req, res) => {
  try {
    const body = req.body;

    const proyecto = await Proyectos(body);
    proyecto.save();

    res.status(201).send(proyecto);
  } catch (error) {
    return res.status(500).send({ msg: `Error: ${error}` });
  }
};

const updateProyecto = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, ...body } = req.body;

    const proyectoActualizado = await Proyectos.findByIdAndUpdate(
      id,
      { nombre, ...body },
      { new: true }
    );

    if (!proyectoActualizado)
      return res.status(404).send({ msg: "El proyecto no existe" });

    return res.status(200).send(proyectoActualizado);
  } catch (error) {
    return res.status(500).send({ msg: `Error: ${error}` });
  }
};

module.exports = {
  createProyecto,
  readProyectos,
  updateProyecto,
};
