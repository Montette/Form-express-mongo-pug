var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let isLogged = true;
  let link = isLogged ? "You are logged in" : "Log in"
  res.render('index', {link});
});

module.exports = router;
