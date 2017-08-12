var Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  var Games = sequelize.define("Games", {
    location: {
      type: Sequelize.STRING, allowNull: false
    },
    sport: {
      type: Sequelize.STRING, allowNull: false
    },
    active: {
      type: Sequelize.BOOLEAN, allowNull: false
    },
    maxNumPlayers: {
      type: Sequelize.INTEGER, allowNull: false,
    },
    start: {
      type: Sequelize.DATE
    },
    end: {
      type: Sequelize.DATE
    }
  });
  return Games;
};