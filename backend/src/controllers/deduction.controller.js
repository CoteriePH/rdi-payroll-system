const db = require("../models");
const Deduction = db.deduction;

exports.create = async (req, res) => {
  try {
    const new_deduction = await Deduction.create(req.body);
    return res.status(200).send(new_deduction);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.findAll = async (req, res) => {
  const deduction = await Deduction.findAll({include:["additional_deduction"]});
  return res.status(200).send(deduction);
};

exports.findOne = async (req, res) => {
  const deduction = await Deduction.findByPk(req.params.id);
  return res.status(200).send(deduction);
};

//TODO ADD DEDUCTION TOTAL LOGIC
exports.update = async (req, res) => {
  try {
    await Deduction.update(req.body, {
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
    await Deduction.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).send("Deduction deleted successfully.");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
