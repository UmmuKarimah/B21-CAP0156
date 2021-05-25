const Report = require("../schema/Report");
const addReport = async(req, h) => {
    const { email, name, age, gender, location, content } = req.payload;
    try {
        await Report.create({
            email,
            name,
            age,
            gender,
            location,
            content,
            date: Date.now(),
        });
        return h
            .response({
                status: "success",
                data: { email, name, age, gender, location, content },
            })
            .code(200);
    } catch {
        return h
            .response({ status: "error", message: "failed to add report" })
            .code(500);
    }
};
module.exports = { addReport };