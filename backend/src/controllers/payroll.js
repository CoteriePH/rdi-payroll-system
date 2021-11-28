const db = require("../models");
const Payroll = db.payroll;

exports.create = async (req, res) => {
  try {
    const new_payroll = await Payroll.create(req.body);
    return res.status(200).send(new_payroll);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.findAll = async (req, res) => {
  const payroll = await Payroll.findAll();
  return res.status(200).send(payroll);
};

exports.findOne = async (req, res) => {
  const payroll = await Payroll.findByPk(req.params.id);
  return res.status(200).send(payroll);
};

//TODO ADD EARNING TOTAL LOGIC
exports.update = async (req, res) => {
  try {
    await Payroll.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).send("Company updated successfully");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    await Payroll.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).send("Earning deleted successfully.");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
