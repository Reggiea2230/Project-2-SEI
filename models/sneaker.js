const mongoose = require('mongoose');

// Create your User Model


const inventorySchema = new mongoose.Schema({
    itemId: String,
    itemName: String,
    itemPrice: Number,
    itemDesc: String,
    quNum: Number
})


const checkoutSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    phone : Number,
    inventory: [inventorySchema]
});

// const paywallSchema = new mongoose.Schema({
//     card: Number,
//     exp: Number,
//     ccv: Number,
//     checkbox: Boolean,
//     checkout: [checkoutSchema],
//     inventory: [inventorySchema],
// });

module.exports = mongoose.model('Checkout', checkoutSchema);