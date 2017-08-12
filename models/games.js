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
    activePlayers: {
      type: Sequelize.INTEGER, allowNull: false
    },
    maxNumPlayers: {
      type: Sequelize.INTEGER, allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    timestamps: false
  }
  );
  return Games;
};