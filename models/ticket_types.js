'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ticket_types extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ticket_types.hasMany(models.promos)
      ticket_types.hasMany(models.inventories)
    }
  }
  ticket_types.init({
    type: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ticket_types',
    paranoid:true
  });
  return ticket_types;
};