const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ({
    name: String,
    sneakerKnowledge: String,
    googleId: String
});

module.exports = mongoose.model('User', userSchema);