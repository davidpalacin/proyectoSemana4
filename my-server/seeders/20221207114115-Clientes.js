'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert(
    "Clientes",
    [
      {
        nombre: "John Doe",
        email: "email@email.com",
        telefono: "666666666",
        dni: "87452379E",
      },
      {
        nombre: "Jonatan Doe",
        email: "jona@email.com",
        telefono: "666666888",
        dni: "873563894E",
      },
      {
        nombre: "Pepe",
        email: "pepe@pepe.com",
        telefono: "222222222",
        dni: "26378645O",
      },
    ],
    {}
  );
     
    
  },

  async down(queryInterface, Sequelize) {
    //  await queryInterface.bulkDelete('People', null, {}); 
  },
};
