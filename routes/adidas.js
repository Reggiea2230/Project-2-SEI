//Sneakers

var router = require('express').Router();
var shoeCtrl = require('../controllers/shoes');


router.get('/all', shoeCtrl.all);
router.get('/:slug', shoeCtrl);

module.export = router;