const getEtapas = async (req, res) => {
  try {
    let { nombre } = req.params;
    res.status(200).send({ msg: nombre });
  } catch (error) {}
};

module.exports = {
  getEtapas,
};
