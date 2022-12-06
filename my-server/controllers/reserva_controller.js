const { Reservas } = require("../models/index");

const ReservaController = {};

ReservaController.findAll = (req, res) => {
  Reservas.findAll().then((data) => {
    res.send(data);
  });
};

ReservaController.findByPk = (req, res) => {
  const id = req.params.id;
  Reservas.findByPk(id).then((data) => {
    res.send(data);
  });
};

ReservaController.findByEntryDate = (req, res) => {
  const entrydate = req.params.entrydate;
  Reservas.findOne({ where: { fecha_entrada: entrydate } }).then((data) => {
    res.send(data);
  });
};

ReservaController.findByFinalDate = (req, res) => {
  const finaldate = req.params.finaldate;
  Reservas.findOne({ where: { fecha_salida: finaldate } }).then((data) => {
    res.send(data);
  });
};

module.exports = ReservaController;
