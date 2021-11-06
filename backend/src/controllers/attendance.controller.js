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

exports.create = async (req, res) => {
  try {
    // INIT
    let attendance_details = req.body;
    let time_in = timeConverter(attendance_details.time_in);
    let time_out = timeConverter(attendance_details.time_out);
    let late_time = timeConverter("7:10");
    let valid_time_out = timeConverter("17:00");

    //COMPUTE & MODIFY FIELDS
    attendance_details.accuracy = null;
    attendance_details.entries = null;
    attendance_details.status_time_in = getTimeInStatus(time_in, late_time);
    attendance_details.status_time_out = getTimeOutStatus(
      time_out,
      valid_time_out
    );
    attendance_details.total_running_time = getTotalRunningTime(
      time_in,
      time_out
    );
    attendance_details.tardiness = getTardiness(time_in, late_time);
    attendance_details.absent = getAbsentStatus(time_in);
    attendance_details.date = Date.now();

    //SAVE
    const new_attendance = await Attendance.create(attendance_details);
    return res.status(200).send(new_attendance);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.findAll = async (req, res) => {
  const attendance = await Attendance.findAll({
    include: ["employee"],
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
