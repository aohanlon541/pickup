var express = require('express');
var path = require('path');
var db = require('../models/index.js');

var router = express.Router();

// load login page
router.get("/", function(req, res) {
    res.render("logIn");
});

router.post('/login', function(req, res) {
    db.Users.findAll({
      username: req.body.username,
      password: req.body.password
        }).then(function(success, err) {
            if (err) {
              alert("Wrong username or password")
            }
            else {
            console.log("Logged in as " + req.body.username);
            res.redirect("index");
          }
  });
});

router.get("/signup", function(req, res) {
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
    var sports = [{
            sport: 'Basketball',
            chosen: false
        },
        {
            sport: 'Ultimate',
            chosen: false
        },
        {
            sport: 'Soccer',
            chosen: false
        },
        {
            sport: 'Football',
            chosen: false
        }
    ];

    var activeGames = [];

    if (req.query.sport !== undefined) {
        db.Games.findAll({
            where: {
                sport: req.query.sport.charAt(0).toLowerCase() + req.query.sport.slice(1),
                active: true
            }
        }).then(function(games) {
            for (var s in sports) {
                if (sports[s].sport === req.query.sport) {
                    sports[s].chosen = true;
                }
            }

            for (var g in games) {
                var data = games[g].dataValues;
                var game = {
                    parkName: data.location,
                    sport: data.sport,
                    numPlayers: data.activePlayers
                };
                activeGames.push(game);
            }
        });
    }

    var sportsObj = {
        sports: sports,
        activeGames: activeGames
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
        activePlayers: 1,
        maxNumPlayers: req.body.num
    }).then(function() {
        console.log("Game added")
        res.redirect("/index");
    });
});




module.exports = router;