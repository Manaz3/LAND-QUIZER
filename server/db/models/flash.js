"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Flash extends Model {
    static associate({Theme}) {
      this.belongsTo(Theme, { foreignKey: "theme_id" });
    }
  }
  Flash.init(
    {
      question: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      answer: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      theme_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Themes",
          key: "id",
        },
        onDelete: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "Flash",
    }
  );
  return Flash;
};
