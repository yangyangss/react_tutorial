var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/accounts', function(req, res, next) {
  res.send('This is accounts list page');
});

router.get('/create', function(req, res, next) {
  res.send('This is create account page');
});


module.exports = router;
