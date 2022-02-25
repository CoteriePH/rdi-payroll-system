const res = require("express/lib/response");
const db = require("../models");
const Attendance = db.attendance;
const {
  timeConverter,
  getAbsentStatus,
  getTardiness,
  getTimeInStatus,
  getTimeOutStatus,
  getTotalRunningTime,
} = require("../helpers/attendance.helper");

exports.findAll = async (req, res) => {
  let filters = {};
  if (req.query.type) {
    filters = { ...filters, type: req.query.type };
  }

  const attendance = await Attendance.findAll({
    where: filters,
    include: ["employee", "entries"],
  });
  return res.status(200).send(attendance);
};

exports.findOne = async (req, res) => {
  const attendance = await Attendance.findByPk(req.params.id);
  return res.status(200).send(attendance);
};

exports.update = async (req, res) => {
  try {
    await Attendance.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).send("Attendance updated successfully");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    await Attendance.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).send("Attendance deleted successfully.");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
