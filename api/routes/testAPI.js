var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('Working with http://localhost:9000/ on the backend');
});

module.exports = router;