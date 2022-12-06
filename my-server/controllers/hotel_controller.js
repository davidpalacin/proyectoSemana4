const { Hoteles } = require("../models/index");

const HotelController = {};

HotelController.findAll = (req, res) => {
  Hoteles.findAll().then((data) => {
    res.send(data);
  });
};

HotelController.findByPk = (req, res) => {
  const id = req.params.id;
  Hoteles.findByPk(id).then((data) => {
    res.send(data);
  });
};

HotelController.findByName = (req, res) => {
  const nombre = req.params.nombre;
  console.log();
  Hoteles.findOne({ where: { nombre: nombre } }).then((data) => {
    res.send(data);
  });
};

HotelController.findByPrice = (req, res) => {
  const price = req.params.price;
  Hoteles.findOne({ where: { importe_noche: price } }).then((data) => {
    res.send(data);
  });
};
module.exports = HotelController;
