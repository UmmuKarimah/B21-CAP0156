const mongoose = require('mongoose');
const CommentSchema = new mongoose.Schema({
    threadId: mongoose.Schema.Types.ObjectId,
    email: String,
    comment: String,
    date: Date
});
module.exports = mongoose.model('comment', CommentSchema);