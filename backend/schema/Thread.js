const mongoose = require('mongoose');
const TreadSchema = new mongoose.Schema({
    content: String,
    vote: Number,
    numComment: Number,
    date: Date
});
module.exports = mongoose.model('thread', TreadSchema);