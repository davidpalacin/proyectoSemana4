'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert(
     "Reservas",
     [
       {
         fecha_entrada: "2023-01-23",
         fecha_salida: "2023-02-23",
         id_hotel: 4,
         id_cliente: 3,
         precio_reserva: 2000,
       },
       {
         fecha_entrada: "2023-01-23",
         fecha_salida: "2023-02-24",
         id_hotel: 3,
         id_cliente: 2,
         precio_reserva: 2050,
       },
       {
         fecha_entrada: "2023-03-16",
         fecha_salida: "2023-03-20",
         id_hotel: 2,
         id_cliente: 3,
         precio_reserva: 600,
       },
       {
         fecha_entrada: "2023-07-12",
         fecha_salida: "2023-09-01",
         id_hotel: 1,
         id_cliente: 3,
         precio_reserva: 5000,
       },
     ],
     {}
   );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
