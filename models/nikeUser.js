const mongoose = require('mongoose');

// Create your User Model

const nikeUserSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String
});

module.exports = mongoose.model('Nike', nikeUserSchema);