const { addComment, getCommentInThread, deleteComment } = require("../handlers/CommentHandler");

module.exports = [{
        method: 'POST',
        path: '/comment',
        handler: addComment
    },
    {
        method: 'GET',
        path: '/comment/{threadId}',
        handler: getCommentInThread
    },
    {
        method: 'DELETE',
        path: '/comment/{id}',
        handler: deleteComment
    }
];