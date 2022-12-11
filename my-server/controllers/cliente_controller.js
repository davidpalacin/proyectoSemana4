const { Clientes, Reservas, Hoteles } = require("../models");
const { Op } = require("sequelize");

const ClienteController = {};

ClienteController.findAll = async (req, res) => {
  try {
    const data = await Clientes.findAll({
      include: [
        {
          model: Reservas,
          as: "Reservas",
          include: [{ model: Hoteles, as: "id_hotel_Hotele" }],
        },
      ],
    });

    if (data.length > 0) {
      res.json(data);
    } else {
      res.status(404).send({
        message: "Cannot find results about Clients",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal server error while retrieving clients.",
    });
  }
};

ClienteController.findByPk = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Clientes.findByPk(id, {
      include: [
        {
          model: Reservas,
          as: "Reservas",
          include: [{ model: Hoteles, as: "id_hotel_Hotele" }],
        },
      ],
    });
    if (data) {
      res.json(data);
    } else {
      res.status(404).send({
        message: "Cannot find any client",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal server error",
    });
  }
};

ClienteController.findByName = async (req, res) => {
  try {
    const nombre = req.params.nombre;
    const data = await Clientes.findOne({
      where: { Nombre: nombre },
      include: [
        {
          model: Reservas,
          as: "Reservas",
          include: [{ model: Hoteles, as: "id_hotel_Hotele" }],
        },
      ],
    });
    if (data) {
      res.json(data);
    } else {
      res.status(404).send({
        message: "Cannot find a client with this name",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal server error when retrieving client by name.",
    });
  }
};

ClienteController.findByDNI = async (req, res) => {
  try {
    const dni = req.params.dni;
    const data = await Clientes.findOne({
      where: { dni: dni },
      include: [
        {
          model: Reservas,
          as: "Reservas",
          include: [{ model: Hoteles, as: "id_hotel_Hotele" }],
        },
      ],
    });
    if (data) {
      res.json(data);
    } else {
      res.status(404).send({
        message: "Cannot find a client with this DNI",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal server error when retrieving client by DNI.",
    });
  }
};

ClienteController.findByPhone = async (req, res) => {
  try {
    const phone = req.params.phone;
    const data = await Clientes.findOne({
      where: { telefono: phone },
      include: [
        {
          model: Reservas,
          as: "Reservas",
          include: [{ model: Hoteles, as: "id_hotel_Hotele" }],
        },
      ],
    });

    if (data) {
      res.json(data);
    } else {
      res.status(404).send({
        message: "Cannot find a client with this phone number",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal server error when retrieving client by phone number.",
    });
  }
};

ClienteController.findByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const data = await Clientes.findOne({
      where: { email: email },
      include: [
        {
          model: Reservas,
          as: "Reservas",
          include: [{ model: Hoteles, as: "id_hotel_Hotele" }],
        },
      ],
    });

    if (data) {
      res.json(data);
    } else {
      res.status(404).send({
        message: "Cannot find a client with this email",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal server error when retrieving client by email.",
    });
  }
};

ClienteController.findByNameLike = async (req, res) => {
  try {
    const nombre = req.params.nombre;
    const data = await Clientes.findAll({
      where: { Nombre: { [Op.like]: `%${nombre}%` } },
      include: [
        {
          model: Reservas,
          as: "Reservas",
          include: [{ model: Hoteles, as: "id_hotel_Hotele" }],
        },
      ],
    });

    if (data) {
      res.json(data);
    } else {
      res.status(404).send({
        message: "Cannot find a client with similar name",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal server error when retrieving client by similar name.",
    });
  }
};
module.exports = ClienteController;
