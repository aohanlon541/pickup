// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");
var sequelize;

if (process.env.JAWSDB_URL) {
	sequelize = Sequelize.createConnection(process.env.JAWSDB_URL);
} else {
	sequelize = Sequelize.createConnection({
		host: "localhost",
  		user: "root",
  		password: "3037775643",
  		database: "pickup_db"
	})
}

// Exports the connection for other files to use
sequelize.connect();
module.exports = sequelize;