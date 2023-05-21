const Etapas = require("../models/modelo_etapas");

const readEtapas = async (req, res) => {
  try {
    const etapas = await Etapas.find({});

    if (etapas.length === 0)
      return res.status(404).send({ msg: "No hay etapas registradas" });

    res.status(200).send({ etapas: etapas });
  } catch (error) {
    return res.status(500).send({ msg: `Error: ${error}` });
  }
};

const createEtapa = async (req, res) => {
  try {
    const { nombre, ...body } = req.body;
    console.log(nombre);

    if (!nombre)
      return res.status(400).send({ msg: "No ingresaste el nombre" });

    const etapa = await Etapas({ nombre, ...body });
    etapa.save();

    res.status(201).send(etapa);
  } catch (error) {
    return res.status(500).send({ msg: `Error: ${error}` });
  }
};

const updateEtapa = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, ...body } = req.body;

    const etapaActualizada = await Etapas.findByIdAndUpdate(
      id,
      { nombre, ...body },
      { new: true }
    );

    if (!etapaActualizada)
      return res.status(404).send({ msg: "La etapa no existe" });

    return res.status(200).send(etapaActualizada);
  } catch (error) {
    return res.status(500).send({ msg: `Error: ${error}` });
  }
};

module.exports = {
  createEtapa,
  readEtapas,
  updateEtapa,
};
