'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      name: DataTypes.TEXT,
      password: DataTypes.TEXT,
      total_score: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
