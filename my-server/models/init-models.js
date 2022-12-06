var DataTypes = require("sequelize").DataTypes;
var _Clientes = require("./Clientes");
var _Hoteles = require("./Hoteles");
var _Reservas = require("./Reservas");

function initModels(sequelize) {
  var Clientes = _Clientes(sequelize, DataTypes);
  var Hoteles = _Hoteles(sequelize, DataTypes);
  var Reservas = _Reservas(sequelize, DataTypes);

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
