//Sneakers

var router = require('express').Router();
var shoeCtrl = require('../controllers/kicks');


router.get('/all', shoeCtrl.all);
router.get('/:slug', shoeCtrl.show);

module.exports = router;