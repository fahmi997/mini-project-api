'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class inventories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      inventories.belongsTo(models.events)
      inventories.belongsTo(models.ticket_types)
      inventories.hasMany(models.promos)
    }
  }
  inventories.init({
    ticketTypeId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER,
    isPromo: DataTypes.BOOLEAN,
    startSale: DataTypes.DATE,
    endSale: DataTypes.DATE,
    saleStatus: DataTypes.ENUM('upcoming', 'sold', 'ongoing', 'ended'),
    stock: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'inventories',
    paranoid:true
  });
  return inventories;
};