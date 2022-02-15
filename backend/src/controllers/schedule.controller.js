const db = require("../models");
const Schedule = db.schedule;

exports.findAll = async (req, res) => {
  const schedule = await Schedule.findAll();
  return res.status(200).send(schedule);
};
exports.findOne = async (req, res) => {
  const schedule = await Schedule.findByPk(req.params.id);
  return res.status(200).send(schedule);
};

exports.create = async (req, res) => {
  try {
    const new_schedule = await Schedule.create(req.body);
    return res.status(200).send(new_schedule);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.update = async (req, res) => {
  try {
    await Schedule.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).send("Schedule updated successfully");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    await Schedule.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).send("Schedule deleted successfully.");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
