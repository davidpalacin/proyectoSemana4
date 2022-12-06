const { Clientes } = require("../models/index");

const ClienteController = {};

ClienteController.findAll = (req, res) => {
  Clientes.findAll().then((data) => {
    res.send(data);
  });
};

ClienteController.findByPk = (req, res) => {
  const id = req.params.id;
  Clientes.findByPk(id).then((data) => {
    res.send(data);
  });
};

ClienteController.findOne = (req, res) => {
  const nombre = req.params.nombre;
  console.log();
  Clientes.findOne({ where: { Nombre: "David" } }).then((data) => {
    res.send(data);
  });
};

module.exports = ClienteController;
