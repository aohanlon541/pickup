<<<<<<< HEAD
// require
var express = require("express");
var exphbs = require("express-handlebars");
// express server
var app = express();
// engines

var hbs = exphbs.create({
    defaultLayout: 'main',
    helpers: {
        section: function (name, options) {
            if (!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        }
    }
})



app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
var css = {}
var port = 3000;
// console.log("pick up");
app.listen(port);

app.get("/", function (req, res) {
    res.render("logIn")
});

app.get("/index", function (req, res) {
    res.render("index")
});

app.get("/profile", function (req, res) {
    res.render("profile")
});







=======
var express = require('express');
var bodyParser = require('body-parser');
// var exphbs = require('express-handlebars');

var app = express();
var PORT = process.env.PORT || 3000;

// var db = require('./models');

//Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

//Static directory to be served
app.use(express.static("public"));

// app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');

var routes = require('./controllers/pickupController.js');
app.use('/', routes);

// db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log('Live at port ' + PORT);
    });
// });
>>>>>>> ce7d4ed127693ba822de77450ec35ac65f2a4295
