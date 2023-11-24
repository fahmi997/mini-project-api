'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('categories', [
      {
        name: 'Workshop',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Festival',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Concert',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Exhibition',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Convention',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tournament',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Seminar',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Training',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Other',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
