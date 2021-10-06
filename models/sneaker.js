const mongoose = require('mongoose');

// Create your User Model


const reviewSchema = new mongoose.Schema({
    name: String,
    descrip: String,
    rating: {type: Number, min: 1, max: 5, default: 5},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}, {
    timestamps: true
});


const sneakerSchema = new mongoose.Schema({
    kicks: String,
    releaseYear: String,
    avaliable: Boolean,
    history: String,
    review: [reviewSchema],
    sneakerUser: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    
});



module.exports = mongoose.model('Sneaker', sneakerSchema);



