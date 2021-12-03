var express = require('express');
var router = express.Router();

var math = require('../math');
router.get('/', function (req, res, next) {
    if (req.query.fibonum) {
        // Obliczenia są przeprowadzane bezpośrednio na serwerze
        res.render('fibonacci', {
            title: "Wyznaczanie liczb Fibonacciego",
            fibonum: req.query.fibonum,
            fiboval: math.fibonacci(req.query.fibonum)

        });
    } else {
        res.render('fibonacci', {
            title: "Wyznaczanie liczb Fibonacciego",
            fiboval: undefined

        });
    }
});
module.exports = router;