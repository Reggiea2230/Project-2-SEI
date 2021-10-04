const mongoose = require('mongoose');

const nikeSchema = new mongoose.Schema ({
    name: String,
    email: String,
    sneakKnowledge: String,
    googleId: String
});

module.exports = mongoose.model('Kicks', nikeSchema);