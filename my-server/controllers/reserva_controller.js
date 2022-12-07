const { Reservas, Clientes, Hoteles } = require("../models.js");

const ReservaController = {};

ReservaController.findAll = async(req, res)=>{
  try {
    const data = await Reservas.findAll({
      include:[
        {model: Clientes, as: "id_cliente_Cliente" },
        {model: Hoteles, as: "id_hotel_Hotele"}
      ],
    });
    if(data>0){
      res.json(data);
    } else {
      res.status(404).send({
        message: "Cannot find any reservation.",
      });
    }
  } catch (error) {
    // El catch siempre se utiliza para un error de servidor: 500
    res.status(500).send({
      message: "Some error ocurred while retrieving Reservations."
    });
  }
}
// ReservaController.findAll = (req, res) => {
//   Reservas.findAll().then((data) => {
//     res.send(data);
//   });
// };

ReservaController.findByPk = (req, res) => {
  const id = req.params.id;
  try {
    Reservas.findByPk(id).then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find reservation with id=${id}`,
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      message: `Some error ocurred while retrieving reservation with id=${id}.`,
    });
  }
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

ReservaController.findByEntryDateWithPk = (req, res) => {
  const id = req.params.id
  const entrydate = req.params.entrydate;
  Reservas.findOne({ where: [{id_reserva: id}, {fecha_entrada: entrydate}] })
  .then((data) => {
    if(data.length>0){
      res.send(data);
    }else{
      res.status(404).send({
        message: `Cannot find this entry.`,
      });
    }
  })
  .catch((error)=>{
    res.status(500).send({
      message: `Error retrieving reservations with id: ${id} and date: ${entrydate}.`,
    });
  })
};

module.exports = ReservaController;
