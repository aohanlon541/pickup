var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    firstName: {
      type: Sequelize.STRING, allowNull: false
    },
    lastName: {
      type: Sequelize.STRING, allowNull: false
    },
    email: {
      type: Sequelize.STRING, allowNull: false
    },
    username: {
      type: Sequelize.STRING, allowNull: false, unique: true
    },
    password: {
      type: Sequelize.STRING, allowNull: false
    },
    imageUrl: {
      type: Sequelize.STRING
    },
    numWins:{
      type: Sequelize.INTEGER
    },
    numLosses:{
      type: Sequelize.INTEGER
    },
    inGame: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
    });
    return Users;
};