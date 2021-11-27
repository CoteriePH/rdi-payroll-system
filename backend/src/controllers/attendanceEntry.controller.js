const db = require("../models");
const AttendanceEntry = db.attendanceEntry;
const Employee = db.employee;
const Entry = db.entry;
const { Op, sequelize, Sequelize } = require("../models");


exports.create = async (req, res) => {
  try {
    
    let employees = await Employee.findAll({
      attributes: ['id'],
      raw: true,
    });

    let employee_id_arr = employees.map((employees) => employees.id);

console.log("hi there");
    for (let data = 0; data < employee_id_arr.length; data++) {

      let timeIn = await Entry.findOne({
        attributes: ['time_in'],
        raw: true,
        where: {
          [Op.and]: [
            { employee_id: employee_id_arr[data] },
            { entries: 2 },
            { date: new Date() },
          ]
        },
      });


      if (timeIn != null) {

        let lastEntry = await Entry.max('entries', {
          raw: true,
          where: {
            [Op.and]: [
              { employee_id: employee_id_arr[data] },
              { date: new Date() },
            ]
          },
        });

        if (isNaN(lastEntry)) {
          lastEntry = null;
        }


        let timeOut = await Entry.findOne({
          attributes: ['time_out'],
          raw: true,
          where: {
            [Op.and]: [
              { employee_id: employee_id_arr[data] },
              { entries: lastEntry },
              { date: new Date() },
            ]
          },
        });

        let totalRunningTime = await Entry.sum('running_time', {
          raw: true,
          where: {
            [Op.and]: [
              { employee_id: employee_id_arr[data] },
              { date: new Date() },
            ]
          },
        });


        req.body.time_in = timeIn.time_in;

        req.body.status_time_in = null;

        req.body.tardiness = false;

        req.body.entries = lastEntry;

        req.body.time_out = timeOut.time_out;

        req.body.status_time_out = null;

        req.body.accuracy = null;

        req.body.total_running_time = totalRunningTime;

        req.body.absent = false;

        req.body.date = Date.now();

        req.body.employee_id = employee_id_arr[data];
      }

      else {
        req.body.employee_id = employee_id_arr[data];
        req.body.time_in = null;

        req.body.time_out = null;

        req.body.accuracy = null;

        req.body.total_running_time = null;

        req.body.entries = null;

        req.body.tardiness = null;

        req.body.date = Date.now();

        req.body.status_time_in = null;

        req.body.status_time_out = null;

        req.body.absent = "ABSENT";

      }

      AttendanceEntry.create(req.body);
    }

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
