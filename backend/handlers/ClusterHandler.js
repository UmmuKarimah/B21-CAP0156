const { getClustering } = require('../cloudFunction');
const Cluster = require('../schema/Cluster');

const addCluster = async(req, h) => {
    const {
        region,
        reportCase,
        clusteringCode
    } = req.payload;
    try {
        await Cluster.create({
            region,
            reportCase,
            clusteringCode
        });
        return h.response({
            status: 'success',
            data: {
                region,
                reportCase,
                clusteringCode
            }
        }).code(200);
    } catch {
        return h.response({ status: 'error', message: 'gagal menambah data clustering' }).code(500);
    }

}

const getCluster = async(_, h) => {
    try {
        const cluster = await Cluster.findOne({}).exec();
        return h.response({ status: 'success', data: cluster }).code(200);
    } catch {
        return h.response({ status: 'error', message: 'gagal fetch data clustering' }).code(500);
    }
}

const updateCluster = async(req, h) => {
    const {
        reportCase
    } = req.payload;
    try {
        const clusteringCode = await getClustering(reportCase);
        await Cluster.findByIdAndUpdate("60b8e53373af191230b91266", {
            reportCase,
            clusteringCode
        });
        return h.response({
            status: 'success',
            data: {
                reportCase,
                clusteringCode
            }
        }).code(200);
    } catch {
        return h.response({ status: 'error', message: 'gagal mengupdate data clustering' }).code(500);
    }
}

module.exports = { addCluster, getCluster, updateCluster };