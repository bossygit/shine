var express = require('express');
var router = express.Router();

/* GET home page. */
router
.get('/', function(req, res, next) {
  res.render('index', { title: 'Shine2Fm - Fast Food Mobile' });
})
.get('/menu', function(req, res, next) {
  res.render('menu', { title: 'Shine2Fm - Fast Food Mobile' });
})
.get('/page', function(req, res, next) {
  res.render('page', { title: 'Shine2Fm - Fast Food Mobile' });
});

module.exports = router;
