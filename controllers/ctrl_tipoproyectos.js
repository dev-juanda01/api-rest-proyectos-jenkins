const Tipoproyectos = require("../models/modelo_tipoproyecto");

const readTipoproyectos = async (req, res) => {
  try {
    const tipoproyectos = await Tipoproyectos.find({});
    //console.log(tipoproectos);

    if (!tipoproyectos)
      return res
        .status(404)
        .send({ msg: "No hay tipos de proyectos registrados" });

    res.status(200).send({ tipoproyectos: tipoproyectos });
  } catch (error) {
    return res.status(500).send({ msg: `Error: ${error}` });
  }
};

const createTipoproyecto = async (req, res) => {
  try {
    const { nombre, ...body } = req.body;
    console.log(nombre);

    if (!nombre)
      return res.status(400).send({ msg: "No ingresaste el nombre" });

    const tipoproyecto = await Tipoproyectos({ nombre, ...body });
    tipoproyecto.save();

    res.status(201).send(etapa);
  } catch (error) {
    return res.status(500).send({ msg: `Error: ${error}` });
  }
};

const updateTipoproyecto = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, ...body } = req.body;

    const tipoproyectoActualizado = await Tipoproyectos.findByIdAndUpdate(
      id,
      { nombre, ...body },
      { new: true }
    );

    if (!tipoproyectoActualizado)
      return res.status(404).send({ msg: "El tipo de proyecto no existe" });

    return res.status(200).send(tipoproyectoActualizado);
  } catch (error) {
    return res.status(500).send({ msg: `Error: ${error}` });
  }
};

module.exports = {
  createTipoproyecto,
  readTipoproyectos,
  updateTipoproyecto,
};
