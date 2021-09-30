const mongoose = require('mongoose');

// Create your User Model


const inventorySchema = new mongoose.Schema({
    itemId: String,
    itemName: String,
    itemPrice: Number,
    itemDesc: String
})

const checkoutSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    phone : Number
});

const paywallSchema = new moogoose.Schema({
    card: Number,
    exp: Number,
    ccv: Number,
    checkbox: Boolean,
    checkout: [checkoutSchema],
    inventory: [inventorySchema],
    nikeUserSchema: [nikeUserSchema]
});

module.exports = mongoose.model('Paywall', paywallSchema);