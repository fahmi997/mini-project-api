'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      events.belongsTo(models.accounts)
      events.belongsTo(models.categories)
      events.belongsTo(models.cities)
      events.belongsTo(models.promos)
    }
  }
  events.init({
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
    url: DataTypes.STRING,
    eventStatus: DataTypes.ENUM('upcoming', 'ongoing', 'canceled', 'ended'),
    method: DataTypes.ENUM('offline', 'online'),
    type: DataTypes.ENUM('paid', 'free'),
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'events',
  });
  return events;
};