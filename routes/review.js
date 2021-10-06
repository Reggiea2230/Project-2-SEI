//Reviews


var router = require('express').Router()
var reviewsCtrl= require('../controllers/review');


router.post('/sneakers/:id/review', reviewsCtrl.create);
router.delete('/review/:id', reviewsCtrl.delete);

module.exports = router;