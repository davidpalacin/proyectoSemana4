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
      {
        nombre: "Eustaquio",
        email: "eustakiller@gmail.com",
        telefono: "111999222",
        dni: "75836487F",
      },
      {
        nombre: "Laura",
        email: "lau1999@gmail.com",
        telefono: "777555333",
        dni: "46785648I",
      },
      {
        nombre: "Alba",
        email: "albaparedes@gmail.com",
        telefono: "777444000",
        dni: "27568956O",
      },
      {
        nombre: "Viel",
        email: "vielmail@gmail.com",
        telefono: "111222333",
        dni: "65747895T",
      },
      {
        nombre: "Evaristo",
        email: "evalistojeje@outlook.com",
        telefono: "777888999",
        dni: "78765434M",
      },
      {
        nombre: "Marc",
        email: "marquitos@hotmail.com",
        telefono: "444555666",
        dni: "65489034G",
      },
      {
        nombre: "Miguel",
        email: "Miguelilloelpillo@gmail.com",
        telefono: "555666777",
        dni: "65487654K",
      }
    ],
    {}
  );
     
    
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clientes', null, {});
  },
};
