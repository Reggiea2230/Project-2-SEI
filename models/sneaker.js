const mongoose = require('mongoose');

// Create your User Model


const fashoReviewSchema = new mongoose.Schema({
    fashoName: String,
    descrip: String,
    rating: Number
})


const sneaksSchema = new mongoose.Schema({
    kicks: String,
    slug: String,
    history: String,
    brand: String,
    locations: String,
    review: [fashoReviewSchema]
});



module.exports = mongoose.model('Sneaks', sneaksSchema);









//later Use for PayWall Schema

// const paywallSchema = new mongoose.Schema({
//     card: Number,
//     exp: Number,
//     ccv: Number,
//     checkbox: Boolean,
//     checkout: [checkoutSchema],
//     inventory: [inventorySchema],
// });