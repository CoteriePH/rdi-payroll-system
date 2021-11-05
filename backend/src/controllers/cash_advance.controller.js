const { Op, employee } = require("../models");
const db = require("../models");
const CashAdvance = db.cash_advance;
const { addDays } = require("../helpers/date.helper");
const { formatterPeso } = require("../helpers/currency.helper");
const default_payout_days = 15;

exports.create = async (req, res) => {
  try {
    const { amount_borrowed, no_of_payments, employee_id } = req.body;
    const date_now = Date.now();

    const cash_advance_details = {
      amount_borrowed,
      no_of_payments,
      employee_id,
    };

    cash_advance_details.salary_deduction = formatterPeso.format(
      amount_borrowed / no_of_payments
    );
    cash_advance_details.date_from = date_now;
    cash_advance_details.date_to = addDays(
      date_now,
      default_payout_days * no_of_payments
    );

    const new_cash_advance = await CashAdvance.create(cash_advance_details);
    return res.status(200).send(new_cash_advance);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.findAll = async (req, res) => {
  // const date_from = req.query.date_from;
  // const date_to = req.query.date_to;
  const status = req.query.status;
  const approval_status = req.query.approval_status;
  let andItems = [];

  if (status) andItems.push({ status: status });
  if (approval_status) andItems.push({ approval_status: approval_status });

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
    if (no_of_payments) {
      const cash_advance = await CashAdvance.findByPk(req.params.id);
      cash_advance.date_to = addDays(
        cash_advance.date_from,
        default_payout_days * no_of_payments
      );
      cash_advance.salary_deduction = formatterPeso.format(
        cash_advance.amount_borrowed / no_of_payments
      );
      cash_advance.no_of_payments = no_of_payments;
      cash_advance.status = status || cash_advance.status;
      cash_advance.ca_status = ca_status || cash_advance.ca_status;
      cash_advance.save();
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

    return res.status(200).send("Cash advance updated successfully");
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
