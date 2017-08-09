var express = require('express');
var path = require('path');
// var db = require('../models');

var router = express.Router();

// var set up to fill in html, export from a js page?
var games = [
// how its set up with hard code info
  {img: 'img/basketball.png',parkName: "tweetles park",sport: "dumb-ball" ,playerNum: "8"},
// build a constructer to grab data from arrays?
  // img:
  // park:
  // sport:
  // playerNum:
]
router.get("/index", function (req,res){
  res.render("index",{game:games});
});

router.get("/", function(req, res) {
  // res.sendFile(path.join(__dirname+'/../htmlFiles_toBeDeleted/login.html'));
  res.render(path.join(__dirname+'/../views/logIn.handlebars'));
});

router.get("/index", function(req, res) {
  // res.sendFile(path.join(__dirname+'/../htmlFiles_toBeDeleted/indx.html'));
  res.render(path.join(__dirname+'/../views/index.handlebars'));
});

router.get("/profile", function(req, res) {
  // res.sendFile(path.join(__dirname+'/../htmlFiles_toBeDeleted/profile.html'));
  res.render(path.join(__dirname+'/../views/profile.handlebars'));
});






module.exports = router;