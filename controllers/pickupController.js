var express = require('express');
var path = require('path');
// var db = require('../models');

var router = express.Router();

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