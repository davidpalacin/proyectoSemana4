const { Reservas, Clientes, Hoteles } = require("../models.js");

const ReservaController = {};

// Controlador busca todas las reservas
ReservaController.findAll = async(req, res)=>{
  try {
    const data = await Reservas.findAll({
      include:[
        {model: Clientes, as: "id_cliente_Cliente" },
        {model: Hoteles, as: "id_hotel_Hotele"}
      ],
    });
    if(data.length >= 0){
      res.json(data);  
    }else{
      res.status(404).send({
        message: "Cannot find any reservation."
      });
    }
  } catch (error) {
    // El catch siempre se utiliza para un error de servidor: 500
    res.status(500).send({
      message: "Some error ocurred while retrieving Reservations."
    });
  }
}

// Busca todas las reservas por PK
ReservaController.findByPk = async(req, res) => {
  try {
    const id = req.params.id;
    const data = await Reservas.findByPk(id, {
      include: [
        { model: Clientes, as: "id_cliente_Cliente" },
        { model: Hoteles, as: "id_hotel_Hotele" },
      ],
    });
    if (data) {
      res.json(data);
    } else {
      res.status(404).send({
        message: `Cannot find reservation with id=${id}`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Some error ocurred while retrieving reservation with id=${id}.`,
    });
  }
};

// Busca las reservas con fecha de entrada especifica
ReservaController.findByEntryDate = async (req, res) => {
  try {
    const entrydate = req.params.entrydate;
    const data = await Reservas.findOne(
      {
        where: { fecha_entrada: entrydate },
        include: [
          { model: Clientes, as: "id_cliente_Cliente" },
          { model: Hoteles, as: "id_hotel_Hotele" },
        ],
      }
    );
    if (data) {
      res.json(data);
    } else {
      res.status(404).send({
        message: `cannot find reserv with entry date: ${entrydate}`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Some error ocurred while retrieving reservation`,
    });
  }
};

// Busca las reservas con fecha de salida especifica
ReservaController.findByFinalDate = async (req, res) => {
  try {
    const finaldate = req.params.finaldate;
    const data = await Reservas.findOne({
      where: { fecha_salida: finaldate },
      include: [
        { model: Clientes, as: "id_cliente_Cliente" },
        { model: Hoteles, as: "id_hotel_Hotele" },
      ],
    });
    if (data) {
      res.json(data);
    } else {
      res.status(404).send({
        message: `cannot find reserv with end date: ${finaldate}`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Some error ocurred while retrieving reservation`,
    });
  }
};

// Busca las reservas con fecha de entrada y PK especificos
ReservaController.findByEntryDateWithPk = async (req, res) => {
  try {
    const id = req.params.id;
    const entrydate = req.params.entrydate;  

    const data = await Reservas.findOne({
      where: [{ id_reserva: id }, { fecha_entrada: entrydate }],
      include: [
        { model: Clientes, as: "id_cliente_Cliente" },
        { model: Hoteles, as: "id_hotel_Hotele" },
      ],
    });

    if(data) {
      res.json(data);
    } else {
      res.status(404).send({
        message: `Cannot find reserv with id: ${id} and entry date: ${entrydate}`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "An error has ocurred while retrieving reservations."
    });
  }
};

module.exports = ReservaController;
