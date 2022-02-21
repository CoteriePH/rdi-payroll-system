const { Op, sequelize, Sequelize } = require("../models");
const db = require("../models");
const Employee = db.employee;
const CashAdvance = db.cash_advance;
const fs = require("fs");
const path = require("path");
const csv = require("fast-csv");
const { QueryTypes } = require("sequelize");
const { resolve } = require("path");
const Dinero = require("dinero.js");
const { convertToDineroInteger } = require("../helpers/currency.helper");

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
    LEFT JOIN schedules s ON e.schedule_id = s.id
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
  const schedule = req.query.schedule;
  const date_hired_from = req.query.date_hired_from;
  const date_hired_to = req.query.date_hired_to;
  const sex = req.query.sex;
  const cash_advance_eligibility = req.query.cash_advance_eligibility;
  // const time_shift = req.query.time_shift;

  // TODO - REFACTOR TIME SHIFT
  const SCHEDULE_A = req.query.SCHEDULE_A;
  const SCHEDULE_B = req.query.SCHEDULE_B;
  const SCHEDULE_C = req.query.SCHEDULE_C;
  const SCHEDULE_D = req.query.SCHEDULE_D;
  const SCHEDULE_E = req.query.SCHEDULE_E;
  const SCHEDULE_F = req.query.SCHEDULE_F;
  const SCHEDULE_G = req.query.SCHEDULE_G;

  const search = req.query.search;

  let andItems = [];
  let time_shift = [];

  if (company) andItems.push({ company_id: company });
  if (department) andItems.push({ department_id: department });
  if (position) andItems.push({ position_id: position });
  if (schedule) andItems.push({ schedule_id: schedule });
  if (sex) andItems.push({ sex: sex });
  if (cash_advance_eligibility) andItems.push({ cash_advance_eligibility });

  // TODO - REFACTOR
  if (SCHEDULE_A === "true") {
    time_shift.push("SCHEDULE_A");
  }
  if (SCHEDULE_B === "true") {
    time_shift.push("SCHEDULE_B");
  }
  if (SCHEDULE_C === "true") {
    time_shift.push("SCHEDULE_C");
  }
  if (SCHEDULE_D === "true") {
    time_shift.push("SCHEDULE_D");
  }
  if (SCHEDULE_E === "true") {
    time_shift.push("SCHEDULE_E");
  }
  if (SCHEDULE_F === "true") {
    time_shift.push("SCHEDULE_F");
  }
  if (SCHEDULE_G === "true") {
    time_shift.push("SCHEDULE_G");
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
    "files",
    "payrolls",
    "attendances",
    "schedule",
  ];
  const employees = await Employee.findAll(options);
  return res.status(200).send(employees);
};
exports.findOne = async (req, res) => {
  const employee = await Employee.findByPk(req.params.id, {
    include: ["department", "position", "company", "cash_advances"],
  });
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

exports.getPayrollComputation = async (req, res) => {
  let { start_date, end_date } = req.query;

  if (!start_date || !end_date) {
    return res.status(400).send("start_date and end_date is required.");
  }
  start_date = new Date(start_date);
  end_date = new Date(end_date);

  const employee = await Employee.findByPk(req.params.id, {
    include: ["position", "company"],
  });

  //TODO - NOT Sure
  const cash_advance = await CashAdvance.findOne({
    where: {
      [Op.and]: {
        [Op.or]: {
          date_from: {
            [Op.between]: [start_date, end_date],
          },
          date_to: {
            [Op.between]: [start_date, end_date],
          },
        },
        ca_status: "INCOMPLETE",
        status: "PROCESSED",
        employee_id: employee.id,
      },
    },
  });

  let no_of_hours = 48;

  //Basic Pay = Rate x no. of hrs./8
  //TODO - TEMPORARY NO. OF HRS
  let dinero_basic_pay = Dinero({
    amount: convertToDineroInteger(employee.basic_pay),
    currency: "PHP",
    precision: 4,
  });
  let basic_pay = dinero_basic_pay.multiply(no_of_hours).divide(8).toUnit();

  //Overtime rate = basic pay/8 + 25%
  let overtime_formula_1 = dinero_basic_pay.divide(8);
  let _25PercentOTFormula1 = overtime_formula_1.multiply(0.25);
  let overtime_rate = overtime_formula_1.add(_25PercentOTFormula1).toUnit();

  //Night differential = basic pay x no. of hrs. /8 + 10%

  let night_differential_formula_1 = dinero_basic_pay.multiply(no_of_hours);
  let night_differential_formula_2 = night_differential_formula_1.divide(8);
  let _10PercentOfNDFormula2 = night_differential_formula_2.multiply(0.1);
  let night_differential = night_differential_formula_2
    .add(_10PercentOfNDFormula2)
    .toUnit();

  //Sunday Pay = Basic Pay x no. of hrs. /8 + 30%

  let sunday_pay_formula_1 = dinero_basic_pay.multiply(no_of_hours);
  let sunday_pay_formula_2 = sunday_pay_formula_1.divide(8);
  let _30PercentOfSPFormula2 = sunday_pay_formula_2.multiply(0.3);
  let sunday_pay = sunday_pay_formula_2.add(_30PercentOfSPFormula2).toUnit();

  /**
   * DEDUCTIONS
   */

  //Cash Advance
  let ca_deduction =
    cash_advance.salary_deduction > 0 ? cash_advance.salary_deduction : 0;

  return res.status(200).send({
    basic_pay: Number(basic_pay).toFixed(2),
    overtime_rate: Number(overtime_rate).toFixed(2),
    night_differential: Number(night_differential).toFixed(2),
    sunday_pay: Number(sunday_pay).toFixed(2),
    cash_advance: Number(ca_deduction).toFixed(2),
  });
};
