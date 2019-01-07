var express = require('express');
var router = express.Router();
const User = require('../schema');
var db = require('../db.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  let isLogged = true;
  let link = isLogged ? "You are logged in" : "Log in"
  User.find({}, (err, users) => {
    res.render('users', {users, link})
  })

});

module.exports = router;
