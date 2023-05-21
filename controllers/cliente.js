const cliente = require("../modelos/cliente");
const { request, response } = require("express");

// crear
const createcliente = async (req = request, res = response) => {
    try {
      const nombre = req.body.nombre ? req.body.nombre.toUpperCase() : "";
      const clienteDB = await cliente.findOne({ nombre }); //select * from cliente
  
      if (clienteDB) {
        return res.status(400).json({ msg: "Ya existe" });
      }
      const data = {
        nombre, // nombre: nombre
      };
      const newcliente = new cliente (data);
      console.log(newcliente);
      await newcliente.save();
      return res.status(201).json(newcliente);
    } catch (e) {
      return res.status(500).json({
        msg: "Error general " + e,
      });
    }
  };
  
  
  //listar todos
  const listarcliente = async (req = request, res = response) => {
    try {
      console.log("Ejecuto cliente");
      // const { estado } = req.query;
      const clienteDB = await cliente.find({});
      if (clienteDB.length == 0)
        return res.status(404).json({ msg: "No se encuentran datos" });
      //select * from usuario where estado=?
      return res.json(clienteDB);
    } catch (e) {
      return res.status(500).json({
        msg: "Error general " + e,
      });
    }
  };
  
  // actualizar
  const actualizarcliente = async (req, res) => {
    try {
      let id = req.query.id,
        data = req.body,
        actualizado = await cliente.findByIdAndUpdate(id, data);
  
      if (!actualizado)
        return res.status(404).json({ msg: "El cliente no existe" });
  
      res.status(200).json({ msg: "El cliente ha sido actualizado" });
    } catch (error) {
      res.status(500).json({ msg: "Error al procesar la petición" });
    }
  };
  // eliminar
  const eliminarcliente = async (req, res) => {
    try {
      let id = req.query.id,
        eliminado = await cliente.findByIdAndDelete(id);
  
      if (!eliminado)
        return res.status(404).json({ msg: "El cliente no existe" });
  
      res.status(200).json({ msg: "El cliente ha sido eliminado" });
    } catch (error) {
      res.status(500).json({ msg: "Error al procesar la petición" });
    }
  };
  
  module.exports = {
    createcliente,
    listarcliente,
    actualizarcliente,
    eliminarcliente,
  };