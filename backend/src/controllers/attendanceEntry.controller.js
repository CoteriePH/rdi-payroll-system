const db = require("../models");
const AttendanceEntry = db.attendanceEntry;
const Employee = db.employee;

exports.create = async (req, res) => {
  try {


    let employees = await Employee.findAll({ 
      attributes:['id'],
      raw: true,
    });
    

    let employee_id_arr = employees.map((employees)=>employees.id);

    req.body.time_in = null;

    req.body.time_out = null;

    req.body.accuracy = null;

    req.body.total_running_time = null;

    req.body.entries = null;

    req.body.tardiness = null;

    req.body.date = "11/08/2021";

    req.body.status_time_in = null;

    req.body.status_time_out = null;

    req.body.absent = null;
    const new_attendanceEntry = await AttendanceEntry.create(req.body);
    return res.status(200).send(new_attendanceEntry);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.findAll = async (req, res) => {
  const attendanceEntry = await AttendanceEntry.findAll();
  return res.status(200).send(attendanceEntry);
};

exports.findOne = async (req, res) => {
  const attendanceEntry = await AttendanceEntry.findByPk(req.params.id);
  return res.status(200).send(attendanceEntry);
};

exports.update = async (req, res) => {
  try {
    await AttendanceEntry.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).send("AttendanceEntry updated successfully");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    await AttendanceEntry.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).send("AttendanceEntry deleted successfully.");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};