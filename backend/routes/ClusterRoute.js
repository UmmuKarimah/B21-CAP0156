const { addCluster, updateCluster, getCluster } = require("../handlers/ClusterHandler");

module.exports = [{
        method: 'POST',
        path: '/cluster',
        handler: addCluster
    },
    {
        method: 'GET',
        path: '/cluster',
        handler: getCluster
    },
    {
        method: 'PUT',
        path: '/cluster',
        handler: updateCluster
    }
];