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







