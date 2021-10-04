const RevSnk = require("../models/sneaker");

module.exports = {
    create
};

function create (req, res) {
    console.log(req.body)
    RevSnk.findById(req.params.id, function(err, revsnk){
        if(err){
            console.log(err)
            res.send(err)
        }
        console.log(revsnk)
        revsnk.review.push(req.body);
        revsnk.save(function(err){
            res.redirect(`/sneakers/${req.params.id}`)
        })
    })
}
