'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('promos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      invId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'inventories',
          key: 'id'
        }
      },
      ticketTypeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'ticket_types'
          },
          key: 'id'
        }
      },
      eventId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'events'
          },
          key: 'id'
        }
      },
      name: {
        allowNull: false,
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
      stock: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: '0'
      },
      code: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      discount: {
        allowNull: false,
        type: Sequelize.DECIMAL(10,2)
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
    await queryInterface.dropTable('promos');
  }
};