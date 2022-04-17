var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// new route that will display "You're so cool" at URL /user/cool/
router.get('/cool', (req, res, next) => {
  res.send("You're so cool");
});

module.exports = router;
