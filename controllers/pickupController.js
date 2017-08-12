var express = require('express');
var path = require('path');
var db = require('../models/index.js');

// import the users db

var router = express.Router();

// var set up to fill in html, export from a js page?
var games = [
// how its set up with hard code info
  {img: 'img/basketball.png',parkName: "tweetles park",sport: "dumb-ball" ,playerNum: "8"},

]
// router.get("/index", function (req,res){
//   res.render("index",{game:games});
// });

// load login page
router.get("/", function(req, res) {
  res.render("logIn");
});

router.get("/signup", function(req,res) {
  res.render("signup");
});

router.post("/signup", function(req, res) {
  console.log("here");
  db.Users.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.userName,
    email: req.body.email,
    password: req.body.password,
    imageUrl: req.body.imageUrl
  }).then( 
  function() {
    res.redirect("index");
  });
});

router.get("/index/:sport?", function(req, res) {
  res.render("index");
});

router.get("/profile/:username?", function(req, res) {
  res.render("profile");
});








module.exports = router;