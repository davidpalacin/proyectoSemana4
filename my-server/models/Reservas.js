const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Reservas', {
    id_reserva: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fecha_entrada: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_salida: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Clientes',
        key: 'id_cliente'
      }
    },
    id_hotel: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Hoteles',
        key: 'id_hotel'
      }
    }
  }, {
    sequelize,
    tableName: 'Reservas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_reserva" },
        ]
      },
      {
        name: "id_hotel",
        using: "BTREE",
        fields: [
          { name: "id_hotel" },
        ]
      },
      {
        name: "id_cliente",
        using: "BTREE",
        fields: [
          { name: "id_cliente" },
        ]
      },
    ]
  });
};
