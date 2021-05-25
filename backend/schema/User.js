const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    registerDate: Date
});
module.exports = mongoose.model('user', UserSchema);