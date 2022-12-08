'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Hoteles', [
      {
       nombre: 'John Doe Hotel'
      },
      {
        nombre: 'Hotel Palace'
      },
      {
        nombre: 'Hotel Sagrada Familia'
      },
      {
        nombre: 'Hotel Glories Barcelona'
      }
  ], {});
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
