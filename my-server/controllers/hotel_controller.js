const { Hoteles } = require("../models/index");

const HotelController = {};

HotelController.findAll = async (req, res) => {
  try {
    const data = await Hoteles.findAll();

    if(data){
      res.json(data);
    } else {
      res.status(404).send({
        message: "Cannot find any hotel.",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal server error when retrieving hotels.",
    });
  }
};

HotelController.findByPk = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Hoteles.findByPk(id);

    if(data){
      res.json(data);
    } else {
      res.status(404).send({
        message: "Cannot find any hotel with this ID",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal server error finding hotel with this ID",
    });
  }
};

HotelController.findByName = async (req, res) => {
  try {
    const nombre = req.params.nombre;
    const data = await Hoteles.findAll({ where: { nombre: nombre } });

    if(data.length>0){
      res.json(data);
    } else {
      res.status(404).send({
        message: `Cannot find the hotel: ${nombre}`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal server error finding clients with this name",
    });
  }
};

HotelController.findByPrice = async (req, res) => {
  try {
    const price = req.params.price;
    const data = await Hoteles.findOne({ where: { importe_noche: price } });

    if(data){
      res.json(data)
    } else {
      res.status(404).send({
        message: `Cannot find the hotels with price: ${price}`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal server error finding hotels with this price",
    });
  }
};

module.exports = HotelController;
