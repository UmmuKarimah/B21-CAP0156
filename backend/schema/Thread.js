const mongoose = require('mongoose');
const TreadSchema = new mongoose.Schema({
    email: String,
    threadTitle: String,
    content: String,
    vote: Number,
    numComment: Number,
    date: Date
});
module.exports = mongoose.model('thread', TreadSchema);