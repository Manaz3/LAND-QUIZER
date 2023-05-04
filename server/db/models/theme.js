'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    
    static associate({Flash}) {
      this.hasMany(Flash, { foreignKey: "theme_id" });
    }
  }
  Theme.init({
    theme: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Theme',
  });
  return Theme;
};