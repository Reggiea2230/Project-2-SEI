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
      // Note the cool "dot" syntax to query on the property of a subdoc
    Sneaker.findOne({'review._id': req.params.id}, function(err, sneaker){
        // Find the comment subdoc using the id method on Mongoose arrays
        // https://mongoosejs.com/docs/subdocs.html
        const reviewSubdoc = sneaker.review.id(req.params.id);
         // Ensure that the comment was created by the logged in user
        if(!reviewSubdoc.userId.equals(req.user._id)) return res.redirect(`/sneakers/${sneaker._id}`);
        // Update the text of the comment
        reviewSubdoc.descrip = req.body.descrip;
        // Save the updated book
        reviewSubdoc.rating = parseInt(req.body.rating);
        console.log("review subdoc", reviewSubdoc)
        sneaker.save(function(err){
            // Redirect back to the book's show view
            res.redirect(`/sneakers/${sneaker._id}`);
        });
    });
}