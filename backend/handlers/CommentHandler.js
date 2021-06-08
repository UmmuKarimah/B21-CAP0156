const { getSentiment } = require("../cloudFunction");
const Comment = require("../schema/Comment");
const Thread = require("../schema/Thread");
const User = require("../schema/User");

const addComment = async(req, h) => {
    const { threadId, email, comment } = req.payload;
    try {
        if (await getSentiment(comment)) {
            await Comment.create({
                threadId,
                email,
                comment,
                date: Date.now()
            });
            await Thread.findByIdAndUpdate(threadId, { "$inc": { numComment: 1 } });
            return h.response({ status: 'success', postedData: { threadId, email, comment } }).code(200);
        } else {
            return h.response({ status: "error", message: 'komentar anda mengandung unsur negatif' }).code(200);
        }
    } catch {
        return h.response({ status: 'error', message: 'failed to add comment' }).code(500);
    }
}

const getCommentInThread = async(req, h) => {
    const threadId = req.params.threadId;
    try {
        const comment = await Comment.find({ threadId }).limit(10).exec();
        const response = await Promise.all(comment.map(async(element) => {
            const user = await User.findOne({ email: { "$eq": element.email } });
            return {
                user,
                comment: {
                    _id: element._id,
                    comment: element.comment,
                    date: element.date
                }
            }
        }));
        return h.response({ status: 'success', data: response }).code(200);
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