'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class promo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  promo.init({
    invId: DataTypes.INTEGER,
    ticketTypeId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    stock: DataTypes.INTEGER,
    code: DataTypes.STRING,
    discount: DataTypes.DECIMAL(10,2),
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'promos',
    paranoid:true
  });
  return promo;
};