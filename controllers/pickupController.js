var express = require('express');
var path = require('path');
// var db = require('../models');

var router = express.Router();

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
    res.render("index");
});

router.get("/profile/:username?", function(req, res) {
    res.render("profile");
});


router.post("/index?:sport?:park?:num", function(req, res) {
    // function getUrlParameter(name) {
    //     name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    //     var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    //     var results = regex.exec(location.search);
    //     return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    // };
    // console.log(getUrlParameter(park));
    Games.create([
        "location", "sport", "active", "maxNumPlayers"
    ], [
        getUrlParameter(park), getUrlParameter(sport), true, getUrlParameter(num)
    ], function() {
        console.log("Game added")
        res.redirect("/index/:sport?");
    });
});








module.exports = router;