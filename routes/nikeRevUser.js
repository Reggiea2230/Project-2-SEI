//Reviews


var router = require('express').Router()
var revUsersCtrl= require('../controllers/revUsers');

router.post('/sneakers/:slug/revUsers', revUsersCtrl. create);

module.exports = router;