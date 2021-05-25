const CommentRoute = require("./CommentRoute");
const ReportRoutes = require("./ReportRoutes");
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
    ...ReportRoutes
];

module.exports = routes;