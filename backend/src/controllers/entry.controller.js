const res = require("express/lib/response");
const { Op } = require("../models");
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
    const employee = await Employee.findByPk(employee_id);

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
    if (!attendance) {
      //TODO GET EMPLOYEE SCHEDULE (TIME_IN<=SCHEDULE=ONTIME)
      let status_time_in = "LATE IN";
      if (employee.sex === "MALE") status_time_in = "ON TIME";

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
      const entry_count = await Entry.count({
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
