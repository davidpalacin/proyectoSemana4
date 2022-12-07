const DataTypes = require("sequelize").DataTypes;
const _Clientes = require("./Clientes");
const _Hoteles = require("./Hoteles");
const _Reservas = require("./Reservas");

function initModels(sequelize) {
  const Clientes = _Clientes(sequelize, DataTypes);
  const Hoteles = _Hoteles(sequelize, DataTypes);
  const Reservas = _Reservas(sequelize, DataTypes);

  Reservas.belongsTo(Clientes, { as: "id_cliente_Cliente", foreignKey: "id_cliente"});
  Clientes.hasMany(Reservas, { as: "Reservas", foreignKey: "id_cliente"});
  Reservas.belongsTo(Hoteles, { as: "id_hotel_Hotele", foreignKey: "id_hotel"});
  Hoteles.hasMany(Reservas, { as: "Reservas", foreignKey: "id_hotel"});

  return {
    Clientes,
    Hoteles,
    Reservas,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
