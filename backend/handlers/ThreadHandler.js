const Thread = require("../schema/Thread")

const addThread = async(req, h) => {
    const { content } = req.payload;
    try {
        await Thread.create({
            content,
            vote: 0,
            numComment: 0,
            date: Date.now()
        });
        return h.response({ status: 'success', data: content }).code(200);
    } catch {
        return h.response({ status: 'error', message: 'failed to add thread' }).code(500);
    }
}

const getThread = async(_, h) => {
    try {
        const thread = await Thread.find().limit(10).exec();
        return h.response({ status: 'success', data: thread }).code(200);
    } catch {
        return h.response({ status: 'error', message: 'failed to fetch thread' }).code(500);
    }
}

const deleteThread = async(req, h) => {
    try {
        await Thread.findByIdAndRemove(req.params.id);
        return h.response({ status: 'success', data: req.params.id }).code(200);
    } catch {
        return h.response({ status: 'error', message: 'failed to delete thread' }).code(500);
    }
}

module.exports = { addThread, getThread, deleteThread };