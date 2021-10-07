//Sneakers

var router = require('express').Router();
var shoeCtrl = require('../controllers/sneaker');


router.get('/', isLoggedIn, shoeCtrl.index);
router.get('/new', isLoggedIn, shoeCtrl.new);
router.get('/:id', isLoggedIn, shoeCtrl.show);
router.post('/', isLoggedIn, shoeCtrl.create);

function isLoggedIn(req, res, next){
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;