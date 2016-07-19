var express = require('express');
var router = express.Router();

/* GET home page. */
router
.get('/', function(req, res, next) {
  res.render('index', { title: 'Shine2Fm' });
})
.get('/page', function(req, res, next) {
  res.render('page', { title: 'Shine2Fm' });
});

module.exports = router;
