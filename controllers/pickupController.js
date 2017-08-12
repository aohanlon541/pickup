var express = require('express');
var path = require('path');
var db = require('../models/index.js');

// import the users db

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
            console.log(games);
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
        activePlayers: 1,
        maxNumPlayers: req.body.num
    }).then(function() {
        console.log("Game added")
        res.redirect("/index");
    });
});

router.post('/login', function(req, res) {
    req.assert('username', 'Please fill the username').notEmpty();
    req.assert('password', 'Please fill the password').notEmpty();
    var errors = req.validationErrors();
    if (!errors) {
        v_user = req.sanitize('username').escape().trim();
        v_pass = req.sanitize('password').escape().trim();

        db.Users.fineOne({
            username: v_user,
            password: v_pass
        }).then;
    }
});

// 			var query = connection.query('select * from user where the_email="'+v_email+'" and the_password=md5("'+v_pass+), function(err,rows) {
// 				if(err)
// 				{

// 					var errornya  = ("Error Selecting : %s ",err.code );  
// 					console.log(err.code);
// 					req.flash('msg_error', errornya); 
// 					res.redirect('/login'); 
// 				}else
// 				{
// 					if(rows.length <=0)
// 					{

// 						req.flash('msg_error', "Wrong email address or password. Try again."); 
// 						res.redirect('/login');
// 					}
//         }

// }
// });
// });




module.exports = router;