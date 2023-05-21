const Universidad = require("../models/modelo_universidad");

const readUniversidades = async (req, res) => {
  try {
    const universidades = await Universidad.find({});

    if (universidades.length === 0)
      return res.status(404).send({ msg: "No hay universidades registradas" });

    res.status(200).send({ universidades: universidades });
  } catch (error) {
    return res.status(500).send({ msg: `Error: ${error}` });
  }
};

const createUniversidad = async (req, res) => {
  try {
    const { nombre, direccion, telefono, ...body } = req.body;

    if (!nombre || !direccion || !telefono)
      return res.status(400).send({ msg: "No ingresaste la data completa" });

    const universidad = await Universidad({
      nombre,
      direccion,
      telefono,
      ...body,
    });
    universidad.save();

    res.status(201).send(universidad);
  } catch (error) {
    return res.status(500).send({ msg: `Error: ${error}` });
  }
};

const updateUniversidad = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;

    body.fechaActualizacion = new Date();

    const universidadActualizada = await Universidad.findByIdAndUpdate(
      id,
      body,
      { new: true }
    );

    if (!universidadActualizada)
      return res.status(404).send({ msg: "La universidad no existe" });

    return res.status(200).send(universidadActualizada);
  } catch (error) {
    return res.status(500).send({ msg: `Error: ${error}` });
  }
};

module.exports = {
  createUniversidad,
  readUniversidades,
  updateUniversidad,
};
