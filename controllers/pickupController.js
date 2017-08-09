var express = require('express');
var path = require('path');
// var db = require('../models');

var router = express.Router();

// var set up to fill in html, export from a js page?
var games = [
// how its set up with hard code info
  {img: 'img/basketball.png',parkName: "tweetles park",sport: "dumb-ball" ,playerNum: "8"},

]
// router.get("/index", function (req,res){
//   res.render("index",{game:games});
// });

router.get("/", function(req, res) {

  res.render("logIn");
});

router.get("/index/:sport?", function(req, res) {
  res.render("index");
});

router.get("/profile/:username?", function(req, res) {
  res.render("profile");
});








module.exports = router;