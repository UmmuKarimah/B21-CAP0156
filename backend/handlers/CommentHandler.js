const Comment = require("../schema/Comment");

const addComment = async(req, h) => {
    const { threadId, comment } = req.payload;
    try {
        await Comment.create({
            threadId,
            comment,
            date: Date.now()
        });
        return h.response({ status: 'success', data: { threadId, comment } }).code(200);
    } catch {
        return h.response({ status: 'error', message: 'failed to add comment' }).code(500);
    }
}

const getCommentInThread = async(req, h) => {
    const threadId = req.params.threadId;
    try {
        const comment = await Comment.find({ threadId }).limit(10).exec();
        return h.response({ status: 'success', data: comment }).code(200);
    } catch {
        return h.response({ status: 'error', message: 'failed to fetch comment' }).code(500);
    }
}

const deleteComment = async(req, h) => {
    const id = req.params.id;
    try {
        await Comment.findByIdAndRemove(id);
        return h.response({ status: 'success', data: id }).code(200);
    } catch {
        return h.response({ status: 'error', message: 'failed to delete comment' }).code(500);
    }
}
module.exports = { addComment, getCommentInThread, deleteComment };