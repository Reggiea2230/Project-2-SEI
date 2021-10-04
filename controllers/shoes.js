const RevSnk = require('../models/sneaker');

module.exports = {
    all: allRevSnk,
    show
};

function allRevSnk(req, res){
    res.render('sneakers/index');
}

function show(req, res){
    RevSnk.findOne({slug:req.params.slug}, function(err, revsnk){
        console.log(req.params.slug, '<---- slug id');
        console.log(revsnk.revsnk, '<---- sneakers');
        console.log(revsnk, "sneak");
        console.log(typeof revsnk);
        res.render('sneakers/adidaUsers', {
            revsnk: revsnk,
       }); 
    });
}