var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.status(200).send("Bootpay API");
});

router.get('/verification', function(req, res, next) {

});


module.exports = router;