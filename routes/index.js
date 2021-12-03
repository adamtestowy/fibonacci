var express = require('express');
var router = express.Router();

/* GET home page. */
/* Pobranie strony glownej */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Kalkulator' });
});

module.exports = router;
