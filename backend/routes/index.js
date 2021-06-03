const ClusterRoute = require("./ClusterRoute");
const CommentRoute = require("./CommentRoute");
const ReportRoutes = require("./ReportRoute");
const ThreadRoute = require("./ThreadRoute");
const UserRoute = require("./UserRoute");

const routes = [{
        method: "GET",
        path: "/",
        handler: () => "Berhasil",
    },
    ...ThreadRoute,
    ...CommentRoute,
    ...UserRoute,
    ...ReportRoutes,
    ...ClusterRoute
];

module.exports = routes;