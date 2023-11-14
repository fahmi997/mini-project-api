'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('inventories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ticketTypeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'ticket_types',
          key: 'id'
        }
      },
      eventId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'events',
          key: 'id'
        }
      },
      isPromo: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      startSale: {
        allowNull: false,
        type: Sequelize.DATE
      },
      endSale: {
        allowNull: false,
        type: Sequelize.DATE
      },
      saleStatus: {
        allowNull: false,
        type: Sequelize.ENUM('upcoming', 'sold', 'ongoing', 'ended'),
        defaultValue: 'upcoming'
      },
      stock: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('inventories');
  }
};