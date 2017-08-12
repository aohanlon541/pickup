var Sequelize = require("sequelize");

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
    }
    });
  return Users;
};






/*// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var Users = sequelize.define("users", {
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
  }
});

var Games = sequelize.define("games", {
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


// Syncs with DB
Users.sync();
Games.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = {
  Users,
  Games
};*/