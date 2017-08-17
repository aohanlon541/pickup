var express = require('express');
var path = require('path');
var db = require('../models/index.js');

var router = express.Router();

var user = {
  userName: null,
  loggedIn: false,
  gameId: null
};

var sports = [{
    sport: 'Basketball',
    chosen: false
  },{
    sport: 'Ultimate',
    chosen: false
  },{
    sport: 'Soccer',
    chosen: false
  },{
    sport: 'Football',
    chosen: false
  }
];

var activeGames = [];

var error = {};

// load login page
router.get("/", function(req, res) {
    res.render("logIn");
});

router.post('/login', function(req, res) {
    var obj = {
      user: user,
      sports: sports,
      activeGames: activeGames
    };

    db.Users.findAll({
      where: {
        username: req.body.username,
        password: req.body.password
      }}).then(function(result, err) {
          if(result.length == 0 || err) {
            error.message = "Wrong username or password. Try Again";
            console.log(error);
            res.render("login", error);
          } else {
            var userData = result[0].dataValues;
            user.userName = userData.username;
            user.loggedIn = true;
            user.gameId = userData.gameId;
            obj.user = user;
            res.render("index", obj);
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
          //Add object to render
            res.redirect("index");
        });
});

router.get("/index/:sport?", function(req, res) {
  if(req.query.sport !== undefined) {
      var sportQuery = req.query.sport.charAt(0).toLowerCase() + req.query.sport.slice(1);
      db.Games.findAll({
        where: {
          sport: sportQuery,
          active: true
        }
      }).then(function(games){
        for(var s in sports) {
          if(sports[s].sport === req.query.sport) {
            sports[s].chosen = true;
          } else {
            sports[s].chosen = false;
          }
        }

        for(var g in games) {
          var data = games[g].dataValues;
          var game = {
            id: data.id,
            parkName: data.location,
            sport: data.sport,
            numPlayers: data.activePlayers
          };
          activeGames.push(game);
        }

        var sportsObj = {
          user: user,
          sports: sports,
          activeGames: activeGames
        };

        res.render("index", sportsObj);
        activeGames = [];
      });
    } else {
      res.render("index", {sports: sports});
    }
});

router.get("/userStatus", function(req, res) {
    res.json(user);
});

router.post("/index/addUserToGame", function(req, res) {
    db.Games.increment(
        'activePlayers',
        {where: {id: req.body.gameId}}
    ).then(function() {
      user.gameId = req.body.gameId;
      res.sendStatus(200);
    }).catch(function (err) {
      res.sendStatus(500);
    });
});

router.post("/index/removeUserFromGame", function(req, res) {
    db.Games.findById(req.body.gameId).then(games => {
       return games.decrement('activePlayers', {by: 1})
    }).then(function() {
       user.gameId = null;
       res.sendStatus(200);
    }).catch(function (err) {
       res.sendStatus(500);
    })
});

router.get("/profile/:username?", function(req, res) {
    res.render("profile");
});

router.post("/index/create", function(req, res) {
    db.Games.create({
        location: req.body.park,
        sport: req.body.sport,
        active: true,
        activePlayers: 1,
        maxNumPlayers: req.body.num
    }).then(function() {
        console.log("Game added");
        res.redirect("/index");
    });
});




module.exports.Router = router;