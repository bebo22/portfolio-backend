var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/submissions', function (req, res, next) {
  res.end(JSON.stringify({a : 1}))
});

module.exports = router;
