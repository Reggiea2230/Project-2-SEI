const Lace = require("../models/sneaker");

module.exports = {
    create
};

function create (req, res) {
    console.log(req.body)
    Lace.findById(req.params.id, function(err, lace){
        if(err){
            console.log(err)
            res.send(err)
        }
        console.log(lace)
        lace.review.push(req.body);
        lace.save(function(err){
            res.redirect(`/sneakers/${req.params.id}`)
        })
    })
}
