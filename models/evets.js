'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class evets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  evets.init({
    userId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    cityId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    address: DataTypes.STRING,
    description: DataTypes.TEXT,
    tnc: DataTypes.TEXT,
    venue: DataTypes.STRING,
    evetStatus: DataTypes.ENUM,
    method: DataTypes.ENUM,
    type: DataTypes.ENUM,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'evets',
    paranoid: true,
  });
  return evets;
};