const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Clientes', {
    id_cliente: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dni: {
      type: DataTypes.STRING(24),
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING(24),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(32),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Clientes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_cliente" },
        ]
      },
    ]
  });
};
