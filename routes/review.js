//Reviews


var router = require('express').Router()
var reviewsCtrl= require('../controllers/review');

router.post('/sneakers/:slug/review', reviewsCtrl. create);

module.exports = router;