const Sneaker = require("../models/sneaker");

module.exports = {
    create,
    delete: deleteReviews,
    update: updateReviews
};

function create (req, res) {
    // console.log(req.body)
    Sneaker.findById(req.params.id, function(err, sneaker){
        if(err){
            console.log(err)
            res.send(err)
        }
        // console.log(lace)
        req.body.userId = req.user._id;
        req.body.userName = req.user.name;
        sneaker.review.push(req.body);
        sneaker.save(function(err){
            res.redirect(`/sneakers/${sneaker._id}`)
        })
    })
}
function deleteReviews(req, res) {
    
    Sneaker.findOne({'review._id': req.params.id}, function(err, sneaker) {
      
      const commentSubdoc = sneaker.review.id(req.params.id);
      if (!commentSubdoc.userId.equals(req.user._id)) return res.redirect(`/sneakers/${sneaker._id}`);
      commentSubdoc.remove();
      sneaker.save(function(err) {
        res.redirect(`/sneakers/${sneaker._id}`);
      });
    });
  }

  function updateReviews(req, res){
    Sneaker.findOne({'review._id': req.params.id}, function(err, sneaker){
        const reviewSubdoc = sneaker.review.id(req.params.id);
        if(!reviewSubdoc.userId.equals(req.user._id)) return res.redirect(`/sneakers/${sneaker._id}`);
        reviewSubdoc.descrip = req.body.descrip;
        reviewSubdoc.rating = parseInt(req.body.rating);
        sneaker.save(function(err){
            res.redirect(`/sneakers/${sneaker._id}`);
        });
    });
}