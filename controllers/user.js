const Sneaks = require('../models/user');

module.exports ={
    index,
    knowled,
};

function knowled(req, res){
  req.user.facts.push(req.body);
   // req.user is a mongoose document
   // where did we assign the mongoose document to req.user
  req.user.save(function(err){
    res.redirect('/user')
  })
}


function index(req, res, next) {
    console.log(req.query)
    console.log(req.user)
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    let sortKey = req.query.sort || 'name';
    Sneaks.find(modelQuery)
    .sort(sortKey).exec(function(err, sneak) {
      if (err) return next(err);
      res.render('sneak/index', {
        sneak,
        user: req.user,
        name: req.query.name,
        sortKey
      });
    });
  }