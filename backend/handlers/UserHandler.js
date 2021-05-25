const User = require("../schema/User");

const addUser = async(req, h) => {
    const { name, email } = req.payload;
    try {
        await User.create({ name, email, registerDate: Date.now() });
        return h.response({ status: 'success', data: { name, email } }).code(200);
    } catch {
        return h.response({ status: 'error', message: 'failed to add user' }).code(500);
    }
}

const getUser = async(req, h) => {
    const email = req.params.email;
    try {
        const user = await User.find({ email }).exec();
        return h.response({ status: 'success', data: user }).code(200);
    } catch {
        return h.response({ status: 'error', message: 'failed to get user' }).code(500);
    }
}

const updateUser = async(req, h) => {
    const id = req.params.id;
    const { name, email } = req.payload;
    try {
        await User.findByIdAndUpdate(id, { name, email });
        return h.response({ status: 'success', data: { id, name, email } }).code(200);
    } catch {
        return h.response({ status: 'error', message: 'failed to update user' }).code(500);
    }
}

const deleteUser = async(req, h) => {
    const id = req.params.id;
    try {
        await User.findByIdAndRemove(id);
        return h.response({ status: 'success', data: id }).code(200);
    } catch {
        return h.response({ status: 'error', message: 'failed to delete user' }).code(500);
    }
}

module.exports = { addUser, getUser, updateUser, deleteUser };