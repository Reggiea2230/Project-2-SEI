const mongoose = require('mongoose');

// Create your User Model


const reviewSchema = new mongoose.Schema({
    name: String,
    descrip: String,
    rating: {type: Number, min: 1, max: 12, default: 12},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}, {
    timestamps: true
});


const sneakerSchema = new mongoose.Schema({
    kicks: String,
    colorWay: String,
    review: [reviewSchema],
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    
});



module.exports = mongoose.model('Sneaker', sneakerSchema);



