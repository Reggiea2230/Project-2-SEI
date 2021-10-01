var router = require('express').Router();
var nikeUsersCtrl = require('../controllers/nikeUsers');

// GET /students
router.get('/', nikeUsersCtrl.index);
//router.post('/facts', isLoggedIn, nikeUsersCtrl.addFact);


// Authorizing the user to use a route
// probably only want to use this on
// post, put or delete routes
function isLoggedIn(req, res, next) {
	// req.isAuthenticated() this is given to us by passport
	// it returns true or false
	if ( req.isAuthenticated() ) return next(); // next() go to the next function in middleware
	res.redirect('/auth/google');
}



module.exports = router;
