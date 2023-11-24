'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      transactions.belongsTo(models.accounts)
    }
  }
  transactions.init({
    userId: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER,
    status: DataTypes.ENUM('ongoing', 'done', 'expired'),
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'transactions',
    paranoid: true
  });
  return transactions;
};