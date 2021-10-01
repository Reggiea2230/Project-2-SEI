const NikeUser = require('../models/sneaker');

module.exports ={
    index,
};

function index(req, res, next) {
    console.log(req.query)
    console.log(req.user)
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    let sortKey = req.query.sort || 'name';
    NikeUser.find(modelQuery)
    .sort(sortKey).exec(function(err, nikeUsers) {
      if (err) return next(err);
      res.render('views/index', {
        nikeUsers,
        user: req.user,
        name: req.query.name,
        sortKey
      });
    });
  }