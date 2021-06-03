const { addReport, getReportByEmail, getAllReport } = require("../handlers/ReportHandler");

module.exports = [{
        method: 'POST',
        path: '/report',
        handler: addReport
    },
    {
        method: 'GET',
        path: '/report/{email}',
        handler: getReportByEmail
    },
    {
        method: 'GET',
        path: '/report',
        handler: getAllReport
    }
]