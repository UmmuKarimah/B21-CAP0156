const mongoose = require('mongoose');
const ReportSchema = new mongoose.Schema({
    email: String,
    name: String,
    age: Number,
    gender: String,
    location: String,
    content: String,
    date: Date
});
module.exports = mongoose.model('report', ReportSchema);