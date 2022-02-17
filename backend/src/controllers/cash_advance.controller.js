const { Op, employee, cash_advance } = require("../models");
const db = require("../models");
const CashAdvance = db.cash_advance;
const Employee = db.employee;
const { addDays } = require("../helpers/date.helper");
const default_payout_days = 15;
const Dinero = require("dinero.js");
exports.create = async (req, res) => {
  try {
    let { amount_borrowed, no_of_payments, employee_id } = req.body;
    fixed_amount_borrowed = Number(
      Number(amount_borrowed).toFixed(4).toString().replace(".", "")
    );
    amount_borrowed = Dinero({
      amount: fixed_amount_borrowed,
      precision: 4,
    });

    const employee = await Employee.findByPk(employee_id, {
      attributes: ["id", "cash_advance_eligibility"],
    });
    if (!employee.cash_advance_eligibility) {
      throw new Error("Employee is not eligible for cash advance.");
    }

    const date_now = Date.now();

    const cash_advance_details = {
      amount_borrowed: amount_borrowed.toUnit(),
      no_of_payments,
      employee_id,
    };
    cash_advance_details.salary_deduction = amount_borrowed
      .divide(parseInt(no_of_payments))
      .toUnit();

    cash_advance_details.date_from = date_now;
    cash_advance_details.date_to = addDays(
      date_now,
      default_payout_days * no_of_payments
    );

    const new_cash_advance = await CashAdvance.create(cash_advance_details);
    employee.cash_advance_eligibility = false;
    await employee.save();
    return res.status(200).send(new_cash_advance);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.findAll = async (req, res) => {
  // const date_from = req.query.date_from;
  // const date_to = req.query.date_to;
  const status = req.query.status;
  const ca_status = req.query.ca_status;
  let andItems = [];

  if (status) andItems.push({ status: status });
  if (ca_status) andItems.push({ ca_status: ca_status });

  let options = {
    where: {
      [Op.and]: andItems,
    },
  };

  options.include = [
    {
      model: employee,
      include: ["company", "department", "position"],
    },
  ];
  const cash_advance = await CashAdvance.findAll(options);
  return res.status(200).send(cash_advance);
};

exports.findOne = async (req, res) => {
  const cash_advance = await CashAdvance.findByPk(req.params.id, {
    include: [
      { model: employee, include: ["company", "department", "position"] },
    ],
  });
  return res.status(200).send(cash_advance);
};
//TODO ADD EARNING TOTAL LOGIC
exports.update = async (req, res) => {
  try {
    const { status, ca_status, no_of_payments } = req.body;
    const cash_advance = await CashAdvance.findByPk(req.params.id);
    if (no_of_payments && no_of_payments !== cash_advance.no_of_payments) {
      cash_advance.date_to = addDays(
        cash_advance.date_from,
        default_payout_days * no_of_payments
      );
      fixed_amount_borrowed = Number(
        Number(cash_advance.amount_borrowed)
          .toFixed(4)
          .toString()
          .replace(".", "")
      );
      let amount_borrowed = Dinero({
        amount: fixed_amount_borrowed,
        currency: "PHP",
        precision: 4,
      });
      cash_advance.salary_deduction = amount_borrowed
        .divide(parseInt(no_of_payments))
        .toUnit();
      cash_advance.no_of_payments = no_of_payments;
      cash_advance.status = status || cash_advance.status;
      cash_advance.ca_status = "DELAYED";
      await cash_advance.save();
    } else {
      await CashAdvance.update(
        { status, ca_status },
        {
          where: {
            id: req.params.id,
          },
        }
      );
    }
    if (ca_status === "PAID") {
      const employee = await Employee.findByPk(cash_advance.employee_id, {
        attributes: ["id", "cash_advance_eligibility"],
      });
      if (!employee.cash_advance_eligibility) {
        employee.cash_advance_eligibility = true;
        await employee.save();
      }
    }
    return res.status(200).send("Cash advance updated successfully.");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.decline = async (req, res) => {
  try {
    const cash_advance = await CashAdvance.findByPk(req.params.id);
    await Employee.update(
      {
        cash_advance_eligibility: true,
      },
      {
        where: {
          id: cash_advance.employee_id,
        },
      }
    );
    await CashAdvance.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).send("Cash advance declined");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    await CashAdvance.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).send("Cash advance deleted successfully.");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
