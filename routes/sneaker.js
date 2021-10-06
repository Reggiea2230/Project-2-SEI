//Sneakers

var router = require('express').Router();
var shoeCtrl = require('../controllers/sneaker');


router.get('/', shoeCtrl.index);
router.get('/new', shoeCtrl.new);
router.get('/:id', shoeCtrl.show);
router.post('/', shoeCtrl.create);


module.exports = router;