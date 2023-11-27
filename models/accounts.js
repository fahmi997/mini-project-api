'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class accounts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      accounts.hasMany(models.events, {
        foreignKey: { name : "userId"}
      })
      accounts.hasMany(models.transactions)
    }
  }
  accounts.init({
    name: DataTypes.STRING,
    refCode: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: DataTypes.STRING,
    role: DataTypes.ENUM('user', 'eo'),
    avatar: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    refPoint: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'accounts',
    paranoid: true
  });
  return accounts;
};