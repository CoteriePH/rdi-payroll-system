const { Op, sequelize, Sequelize } = require("../models");
const db = require("../models");
const Employee = db.employee;
const fs = require("fs");
const path = require("path");
const csv = require("fast-csv");
const { QueryTypes } = require("sequelize");
const { resolve } = require("path");

exports.exportToCSV = async (req, res) => {
  //TODO - DROP NALANG KUNG ISESELECT * TAS EXCLUDE DROP COLUMN TEMP TABLE
  const query = `
    SELECT 
    last_name,
    middle_name,
    first_name, 
    sex,
    street,
    city,
    province,
    postal_code,
    c.name AS company,
    p.name AS position, 
    d.name AS department, 
    birth_date, 
    email, 
    contact_no, 
    employee_type, 
    date_hired, 
    time_shift
    FROM employees e 
    LEFT JOIN companies c ON e.company_id = c.id 
    LEFT JOIN positions p ON e.position_id = p.id
    LEFT JOIN departments d ON e.department_id = d.id
  `;
  const employees = await sequelize.query(query, {
    type: QueryTypes.SELECT,
  });

  //TODO - PROD - CLOUDINARY
  const ws = fs.createWriteStream(
    path.resolve(__dirname, "../../storage/employees/csv", "employees.csv")
  );

  var filepath = ws.path;

  csv
    .writeToPath(path.resolve(filepath), employees, { headers: true })
    .on("finish", () => {
      console.log("Done writing");
      const file = resolve(filepath);
      //TODO UNLINK AFTER DOWNLOADING
      res.download(file);
    });
};

exports.findAll = async (req, res) => {
  const company = req.query.company;
  const department = req.query.department;
  const position = req.query.position;
  const date_hired_from = req.query.date_hired_from;
  const date_hired_to = req.query.date_hired_to;
  const sex = req.query.sex;
  // const time_shift = req.query.time_shift;

  // TODO - REFACTOR TIME SHIFT
  const MORNING = req.query.MORNING;
  const MID_MORNING = req.query.MID_MORNING;
  const NOON = req.query.NOON;
  const AFTERNOON = req.query.AFTERNOON;

  const search = req.query.search;

  let andItems = [];
  let time_shift = [];

  if (company) andItems.push({ company_id: company });
  if (department) andItems.push({ department_id: department });
  if (position) andItems.push({ position_id: position });
  if (sex) andItems.push({ sex: sex });

  // TODO - REFACTOR
  if (MORNING === "true") {
    time_shift.push("MORNING");
  }
  if (MID_MORNING === "true") {
    time_shift.push("MID_MORNING");
  }
  if (NOON === "true") {
    time_shift.push("NOON");
  }
  if (AFTERNOON === "true") {
    time_shift.push("AFTERNOON");
  }

  if (time_shift.length > 0) {
    andItems.push({ time_shift: { [Op.in]: time_shift } });
  }

  if (search) {
    andItems.push({
      where: Sequelize.where(
        Sequelize.fn(
          "concat",
          Sequelize.col("first_name"),
          " ",
          Sequelize.col("middle_name"),
          " ",
          Sequelize.col("last_name")
        ),
        {
          [Op.like]: `%${search}%`,
        }
      ),
    });
  }

  if (date_hired_from && date_hired_to) {
    const start_date = new Date(date_hired_from);
    const end_date = new Date(date_hired_to);
    andItems.push({
      date_hired: { [Op.between]: [start_date, end_date] },
    });
  } else if (date_hired_from) {
    const start_date = new Date(date_hired_from);
    andItems.push({
      date_hired: { [Op.between]: [start_date, new Date()] },
    });
  } else if (date_hired_to) {
    const end_date = new Date(date_hired_to);
    andItems.push({
      date_hired: { [Op.between]: [new Date(1900), end_date] },
    });
  }

  // TODO MALE/FEMALE
  //TIME SHIFT
  //Search by name

  let options = {
    where: {
      [Op.and]: andItems,
    },
  };

  options.include = [
    "company",
    "department",
    "position",
    "deduction",
    "earning",
    "files",
  ];
  const employees = await Employee.findAll(options);
  return res.status(200).send(employees);
};
exports.findOne = async (req, res) => {
  const employee = await Employee.findByPk(req.params.id);
  return res.status(200).send(employee);
};

exports.create = async (req, res) => {
  try {
    const new_employee = await Employee.create(req.body);
    return res.status(200).send(new_employee);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.update = async (req, res) => {
  try {
    await Employee.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).send("Employee updated successfully");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    await Employee.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).send("Employee deleted successfully.");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
