var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');


var app = express();
var PORT = process.env.PORT || 3000;

var db = require('./models');

//Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

//Static directory to be served
app.use(express.static("public"));

// block helpers
// swaps out css files for correct pages
var hbs = exphbs({
    defaultLayout: 'main',
    helpers: {
        section: function (name, options) {
            if (!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        }
    }
});

//db.sequelize.sync({ force: true }).then(function)


app.engine('handlebars', hbs);
app.set('view engine', 'handlebars');

var routes = require('./controllers/pickupController.js');
app.use('/', routes);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

