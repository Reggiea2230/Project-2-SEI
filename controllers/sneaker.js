const sneaker = require('../models/sneaker');
const Sneaker = require('../models/sneaker');

module.exports = {
   index,
    show,
    new: newSneaker,
    create
};

function index(req, res){
    Sneaker.find({}, function(err, sneakerDocuments){
        console.log(sneakerDocuments, "Sneaker Document right here")
    res.render('sneakers/index', {
       sneaker: sneakerDocuments
        
    
        });
    });
}

function show(req, res){
    Sneaker.findById(req.params.id, function(err, sneaker){

        res.render('sneakers/show', {
            sneaker: sneaker,
            id: req.params.id
       }); 
    }); 
    // res.send('this page is working');
}

function newSneaker(req, res) {
    res.render("sneakers/new"); 
  }

function create(req, res){
    const sneaker = new sneaker(req.body);
    sneaker.save(function(err){
        if (err) return res.render('sneakers/new');
        console.log(sneaker)

        res.redirect('/sneakers/new')
    })

}