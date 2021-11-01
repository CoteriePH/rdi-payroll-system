const db = require("../models");
const Request = db.request;

exports.create = async (req, res) => {
  try {
    const new_request = await Request.create(req.body);
    return res.status(200).send(new_request);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.findAll = async (req, res) => {
  const request = await Request.findAll();
  return res.status(200).send(request);
};

exports.findOne = async (req, res) => {
  const request = await Request.findByPk(req.params.id);
  return res.status(200).send(request);
};

exports.delete = async (req, res) => {
  try {
    await Request.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).send("Request deleted successfully.");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
