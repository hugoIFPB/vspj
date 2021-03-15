const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");

const HQ = db.define("HQ", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  arquivo: DataTypes.STRING
});

module.exports = HQ;