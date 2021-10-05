const Lace = require('../models/sneaker');

module.exports = {
    all: allLace,
    show
};

function allLace(req, res){
    res.render('sneakers/index');
}

function show(req, res){
    Lace.findOne({slug:req.params.slug}, function(err, lace){

        res.render('sneakers/show', {
            lace: lace,
            slug: req.params.slug
       }); 
    });
}