const Sneaker = require('../models/sneaker');

module.exports = {
    index,
    show,
    new: newSneaker,
    create,
    delete: deleteSneaker
};

function index(req, res){
    Sneaker.find({}, function(err, sneakerDocuments){
        console.log(sneakerDocuments, "Sneaker Document right here")
    res.render('sneakers/index', {
       sneaker: sneakerDocuments,
       id: req.params.id
        
    
        });
    });
}

function show(req, res){
    Sneaker.findById(req.params.id, function(err, sneaker){
        console.log(sneaker);
        res.render("sneakers/show", {
            sneaker: sneaker // <--- sneaker is the key and its going to be variable on the show page
                            // sneaker is the document to the right
       });
       
    }); 

}

function newSneaker(req, res) {
    res.render("sneakers/new"); 
  }

function create(req, res){
    const sneaker = new Sneaker(req.body); // new Sneaker is creating a document in the database
    
    sneaker.save(function(err){
        console.log(err, " <---- error");
        if (err) return res.redirect('/sneakers/new');
        
        console.log(sneaker) //<--- sneaker is document in the database 

        res.redirect(`/sneakers/${sneaker._id}`);
    })

}

function deleteSneaker(req, res){
    Sneaker.findOneAndDelete(
        {_id: req.params.id, userRecommending: req.user._id}, function(err){
            res.redirect('/sneakers/show')
        }

    );
}