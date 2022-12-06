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

ClienteController.findByName = (req, res) => {
  const nombre = req.params.nombre;
  Clientes.findOne({ where: { Nombre: nombre } }).then((data) => {
    res.send(data);
  });
};

ClienteController.findByDNI = (req, res) => {
  const dni = req.params.dni;
  Clientes.findOne({ where: { dni: dni } }).then((data) => {
    res.send(data);
  });
};

ClienteController.findByPhone = (req, res) => {
  const phone = req.params.phone;
  Clientes.findOne({ where: { telefono: phone } }).then((data) => {
    res.send(data);
  });
};

ClienteController.findByEmail = (req, res) => {
  const email = req.params.email;
  Clientes.findOne({ where: { email: email } }).then((data) => {
    res.send(data);
  });
};

module.exports = ClienteController;
