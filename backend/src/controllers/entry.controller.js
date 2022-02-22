const res = require("express/lib/response");
const {
  timeConverter,
  getTotalRunningTime,
  getTotalRunningTime2,
} = require("../helpers/attendance.helper");
const { Op, Sequelize, sequelize } = require("../models");
const db = require("../models");
const Entry = db.entry;
const Attendance = db.attendance;
const Employee = db.employee;

exports.create = async (req, res) => {
  try {
    // INIT
    let { employee_id } = req.body;
    if (!employee_id) {
      return res.status(400).send("Employee Id is required");
    }
    const employee = await Employee.findByPk(employee_id, {
      include: ["schedule"],
    });

    //CHECK IF USER HAS RUNNING ATTENDANCE
    const attendance = await Attendance.findOne({
      where: {
        [Op.and]: {
          employee_id,
          status: "ACTIVE",
        },
      },
    });

    let entry_details = {
      employee_id,
    };
    let entry_time = new Date(Date.now());
    let scheduleIn = timeConverter(employee.schedule.start_time);

    if (!attendance) {
      //TODO GET EMPLOYEE SCHEDULE (TIME_IN<=SCHEDULE=ONTIME)
      let status_time_in = "ON TIME";

      if (entry_time.getTime() > scheduleIn.getTime()) {
        status_time_in = "LATE IN";
      }

      entry_details = {
        ...entry_details,
        type: "IN",
        attendance: {
          status: "ACTIVE",
          employee_id,
          status_time_in,
        },
      };
    } else {
      //CHECK IF IN OR OUT
      const { count: entry_count, rows: entry_rows } =
        await Entry.findAndCountAll({
          where: {
            [Op.and]: {
              employee_id,
              attendance_id: attendance.id,
            },
          },
        });

      if (entry_count % 2 === 0) {
        entry_details = {
          ...entry_details,
          attendance_id: attendance.id,
          type: "IN",
        };
      } else {
        let status_time_out = "EARLY OUT";
        let scheduleOut = timeConverter(employee.schedule.end_time);
        if (entry_time.getTime() > scheduleOut.getTime()) {
          //TODO - OVERTIME
          status_time_out = "ON TIME";
        }

        let total_running_time = getTotalRunningTime2(
          new Date(entry_rows[entry_count - 1].created_at),
          entry_time
        );
        console.log(total_running_time);

        await Attendance.update(
          {
            status_time_out,
            total_running_time: sequelize.literal(
              `total_running_time + ${total_running_time}`
            ),
          },
          {
            where: {
              id: attendance.id,
            },
          }
        );
        entry_details = {
          ...entry_details,
          attendance_id: attendance.id,
          type: "OUT",
        };
      }
    }

    const new_entry = await Entry.create(entry_details, {
      include: {
        model: Attendance,
        as: "attendance",
      },
    });

    //SAVE
    return res.status(200).send(new_entry);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.findAll = async (req, res) => {
  const entry = await Entry.findAll({
    include: ["employee"],
  });
  return res.status(200).send(entry);
};

exports.findOne = async (req, res) => {
  const entry = await Entry.findByPk(req.params.id);
  return res.status(200).send(entry);
};

exports.update = async (req, res) => {
  try {
    await Entry.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).send("Entry updated successfully");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    await Entry.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).send("Entry deleted successfully.");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
