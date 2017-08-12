var express = require('express');
var path = require('path');
var db = require('../models');

var router = express.Router();

// var games = require('../models/tables.js').Games;

// var set up to fill in html, export from a js page?
var games = [
        // how its set up with hard code info
        { img: 'img/basketball.png', parkName: "tweetles park", sport: "dumb-ball", playerNum: "8" },

    ]
    // router.get("/index", function (req,res){
    //   res.render("index",{game:games});
    // });

// load login page
router.get("/", function(req, res) {
    res.render("logIn");
});

router.get("/signup", function(req, res) {
    res.render("signup");
});

router.post("/signup", function(req, res) {
    profile.create([
        "firstName", "lastName", "userName", "email", "password", "imageUrl"
    ], [
        req.body.firstName, req.body.lastName, req.body.userName, req.body.email, req.body.passweord, req.body.imageUrl
    ], function() {
        res.redirect("/logIn");
    });
});

router.get("/index/:sport?", function(req, res) {
  var sports = [
    {sport: 'Basketball',
     chosen: false},
     {sport: 'Ultimate',
      chosen: false
     },
    {sport: 'Soccer',
     chosen: false
    },
    {sport: 'Football',
     chosen: false
    }
  ];

  if(req.query.sport !== undefined) {
      db.Games.findAll({
        where: {
          sport: req.query.sport.charAt(0).toLowerCase() + req.query.sport.slice(1),
          active: true
        }
      }).then(function(games){
        for(var s in sports) {
          if(sports[s].sport === req.query.sport) {
            sports[s].chosen = true;
          }
        }
      });
  }
  
  var sportsObj = {
    sports: sports
  };
  res.render("index", sportsObj);
});

router.get("/profile/:username?", function(req, res) {
    res.render("profile");
});

router.post("/index", function(req, res) {
    console.log(req.body);
    db.Games.create({
        location: req.body.park,
        sport: req.body.sport,
        active: true,
        maxNumPlayers: req.body.num
    }).then(function() {
        console.log("Game added")
        res.redirect("/index/:sport?");
    });
});








module.exports = router;