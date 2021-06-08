const Cluster = require("../schema/Cluster");
const Report = require("../schema/Report");
const addReport = async (req, h) => {
  const { email, name, age, gender, location, content } = req.payload;
  try {
    const cluster = await Cluster.findOne({}).exec();
    await Report.create({
      email,
      name,
      age,
      gender,
      location,
      content,
      date: Date.now(),
    });
    const region = cluster.region;
    const index = region.indexOf(location);
    await Cluster.findByIdAndUpdate("60b8e53373af191230b91266", {
      "$inc": { [`reportCase.${index}`]: 1 },
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
const getReportByEmail = async (req, h) => {
  const email = req.params.email;
  try {
    const report = await Report.find({ email }).limit(10).exec();
    return h
      .response({
        status: "success",
        data: report,
      })
      .code(200);
  } catch {
    return h
      .response({ status: "error", message: "failed to fetch report" })
      .code(500);
  }
};
const getAllReport = async (_, h) => {
  try {
    const report = await Report.find({}).limit(10).exec();
    return h
      .response({
        status: "success",
        data: report,
      })
      .code(200);
  } catch {
    return h
      .response({ status: "error", message: "failed to fetch report" })
      .code(500);
  }
};
module.exports = { addReport, getReportByEmail, getAllReport };
