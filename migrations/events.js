'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      categoryId: {
        type: Sequelize.INTEGER
      },
      cityId: {
<<<<<<< HEAD:migrations/events.js
        type: Sequelize.INTEGER
=======
        type: Sequelize.INTEGER,
        references: {
          model: 'cities',
          key: 'id'
        }
>>>>>>> 01b471cf6dbb7da0607d762799e6ccaac371a3b4:migrations/20231112172456-create-events.js
      },
      name: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      startDate: {
        type: Sequelize.DATE
      },
      endDate: {
        type: Sequelize.DATE
      },
      address: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      tnc: {
        type: Sequelize.TEXT
      },
      venue: {
<<<<<<< HEAD:migrations/events.js
=======
        type: Sequelize.STRING
      },
      url: {
>>>>>>> 01b471cf6dbb7da0607d762799e6ccaac371a3b4:migrations/20231112172456-create-events.js
        type: Sequelize.STRING
      },
      eventStatus: {
        type: Sequelize.ENUM('segera', 'berlangsung', 'berakhir', 'dibatalkan', 'ditunda')
      },
      method: {
        type: Sequelize.ENUM('online', 'offline')
      },
      type: {
        type: Sequelize.ENUM('berbayar', 'gratis')
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
    await queryInterface.dropTable('events');
  }
};