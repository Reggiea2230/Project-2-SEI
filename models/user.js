const mongoose = require('mongoose');

const userSneakSchema = new mongoose.Schema ({
    name: String,
    sneakKnowledge: String,
    googleId: String
});

module.exports = mongoose.model('KickUser', userSneakSchema);