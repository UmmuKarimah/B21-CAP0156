const mongoose = require('mongoose');
const ClusterSchema = new mongoose.Schema({
    region: Array,
    reportCase: Array,
    clusteringCode: Array
});
module.exports = mongoose.model('cluster', ClusterSchema);