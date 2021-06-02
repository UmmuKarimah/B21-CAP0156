const {
    addThread,
    getThread,
    deleteThread,
    upVoteThread,
} = require("../handlers/ThreadHandler");
module.exports = [{
        method: "POST",
        path: "/thread",
        handler: addThread,
    },
    {
        method: "GET",
        path: "/thread",
        handler: getThread,
    },
    {
        method: "DELETE",
        path: "/thread/{id}",
        handler: deleteThread,
    },
    {
        method: "PUT",
        path: "/thread/{id}/upvote",
        handler: upVoteThread,
    },
];