const mongoose = require('mongoose');

const userSneakSchema = new mongoose.Schema ({
    name: String,
    sneakerKnowledge: String,
    googleId: String
});

module.exports = mongoose.model('User', userSneakSchema);