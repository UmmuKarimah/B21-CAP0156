const CommentRoute = require("./CommentRoute");
const ThreadRoute = require("./ThreadRoute");
const UserRoute = require("./UserRoute");

const routes = [{
        method: "GET",
        path: "/",
        handler: () => "Berhasil",
    },
    ...ThreadRoute,
    ...CommentRoute,
    ...UserRoute
];

module.exports = routes;