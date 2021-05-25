const mongoose = require('mongoose');
const ReportSchema = new mongoose.Schema({
    email: String,
    nama: String,
    umur: Number,
    kelamin: String,
    lokasi: String,
    laporan: String
});
module.exports = mongoose.model('report', ReportSchema);