const config = require("../config/config.json");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE || config.development.database,
  process.env.MYSQL_USER || config.development.username,
  process.env.MYSQL_PASSWORD || config.development.password,
  process.env.MYSQL_PORT || config.development.port,
  {
    host: "localhost",
    port: 3307,
    dialect: "mysql",
  }
);

module.exports = sequelize.authenticate().then((db) => {
  console.log(
    `MYSQL connected to ${
      process.env.MYSQL_DATABASE || config.development.database
    }`
  );
  return db;
});
