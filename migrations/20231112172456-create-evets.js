'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('evets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      cityId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      startDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      endDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      tnc: {
        type: Sequelize.TEXT
      },
      venue: {
        allowNull: false,
        type: Sequelize.STRING
      },
      evetStatus: {
        allowNull: false,
        type: Sequelize.ENUM('upcoming', 'ongoing', 'canceled', 'ended'),
        defaultValue: 'upcoming'
      },
      method: {
        allowNull: false,
        type: Sequelize.ENUM('offline', 'online'),
        defaultValue: 'offline'
      },
      type: {
        allowNull: false,
        type: Sequelize.ENUM('paid', 'free'),
        defaultValue: 'paid'
      },
      deletedAt: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('evets');
  }
};