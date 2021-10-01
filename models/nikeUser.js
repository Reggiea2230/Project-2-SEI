const mongoose = require('mongoose');

// Create your User Model

const nikeUserSchema = new mongoose.Schema({
    googleId: String
});

module.exports = mongoose.model('Nike', nikeUserSchema);