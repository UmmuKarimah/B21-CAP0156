const { getSentiment } = require("../cloudFunction");
const Thread = require("../schema/Thread");
const User = require("../schema/User");
const Comment = require("../schema/Comment");

const addThread = async(req, h) => {
    const { email, threadTitle, content } = req.payload;
    try {
        if (await getSentiment(content) && await getSentiment(threadTitle)) {
            await Thread.create({
                email,
                threadTitle,
                content,
                vote: 0,
                numComment: 0,
                date: Date.now(),
            });
            return h.response({ status: "success", data: content }).code(200);
        } else {
            return h.response({ status: "error", message: 'tulisan anda mengandung unsur negatif' }).code(200);
        }
    } catch {
        return h
            .response({ status: "error", message: "failed to add thread" })
            .code(500);
    }
};

const getThread = async(_, h) => {
    try {
        const thread = await Thread.find().limit(10).exec();
        const response = await Promise.all(thread.map(async(element) => {
            const user = await User.findOne({ "email": { "$eq": element.email } });
            return {
                user,
                thread: {
                    _id: element._id,
                    threadTitle : element.threadTitle,
                    content: element.content,
                    vote: element.vote,
                    numComment: element.numComment,
                    date: element.date
                }
            }
        }));
        return h.response({ status: "success", data: response }).code(200);
    } catch {
        return h
            .response({ status: "error", message: "failed to fetch thread" })
            .code(500);
    }
};

const deleteThread = async(req, h) => {
    try {
        await Thread.findByIdAndRemove(req.params.id);
        const comment = await Comment.find({ threadId: { "$eq": req.params.id } });
        comment.forEach(async(i) => {
            await Comment.findByIdAndRemove(i._id);
        })
        return h.response({ status: "success", data: req.params.id }).code(200);
    } catch {
        return h
            .response({ status: "error", message: "failed to delete thread" })
            .code(500);
    }
};

const upVoteThread = async(req, h) => {
    const id = req.params.id;
    try {
        await Thread.findByIdAndUpdate(id, { "$inc": { vote: 1 } });
        return h
            .response({ status: "success", message: "success upvote thread" })
            .code(200);
    } catch {
        return h
            .response({ status: "error", message: "failed upvote thread" })
            .code(500);
    }
};

module.exports = { addThread, getThread, deleteThread, upVoteThread };