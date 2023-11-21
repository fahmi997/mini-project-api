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
        name : "Festival, Fair, Bazaar",
        createdAt : new Date (),
        updatedAt : new Date ()
      },
      {
        name : "Konser",
        createdAt : new Date (),
        updatedAt : new Date ()
      },
      {
        name : "Pertandingan",
        createdAt : new Date (),
        updatedAt : new Date ()
      },
      {
        name : "Exhibition, Expo, Pameran",
        createdAt : new Date (),
        updatedAt : new Date ()
      },
      {
        name : "Konferensi",
        createdAt : new Date (),
        updatedAt : new Date ()
      },
      {
        name : "Workshop",
        createdAt : new Date (),
        updatedAt : new Date ()
      },
      {
        name : "Pertunjukan",
        createdAt : new Date (),
        updatedAt : new Date ()
      },
      {
        name : "Atraksi, Theme Park",
        createdAt : new Date (),
        updatedAt : new Date ()
      },
      {
        name : "Akomodasi",
        createdAt : new Date (),
        updatedAt : new Date ()
      },
      {
        name : "Seminar, Talk Show",
        createdAt : new Date (),
        updatedAt : new Date ()
      },
      {
        name : "Social Gathering",
        createdAt : new Date (),
        updatedAt : new Date ()
      },
      {
        name : "Training, Sertifikasi, Ujian",
        createdAt : new Date (),
        updatedAt : new Date ()
      },
      {
        name : "Pensi, Event Sekolah, Kampus",
        createdAt : new Date (),
        updatedAt : new Date ()
      },
      {
        name : "Trip, Tur",
        createdAt : new Date (),
        updatedAt : new Date ()
      },
      {
        name : "Turnamen, Kompetisi",
        createdAt : new Date (),
        updatedAt : new Date ()
      },
      {
        name : "Lainnya",
        createdAt : new Date (),
        updatedAt : new Date ()
      },
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
