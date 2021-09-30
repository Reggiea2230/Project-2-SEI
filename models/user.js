const mongoose = require('mongoose');

// Create your User Model

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
    googleId: String
});

module.exports = mongoose.model('Paywall', paywallSchema);