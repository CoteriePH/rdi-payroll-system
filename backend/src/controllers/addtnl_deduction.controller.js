const db = require("../models");
const AddtnlDeduction  = db.addtnl_deduction;

exports.create = async (req, res) => {
  try {
    const new_deduction = await AddtnlDeduction.create(req.body);
    return res.status(200).send(new_deduction);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.findAll = async (req, res) => {
  try {
    const deduction = await AddtnlDeduction.findAll();
    return res.status(200).send(deduction);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.findOne = async (req, res) => {
  const deduction = await AddtnlDeduction.findByPk(req.params.id);
  return res.status(200).send(deduction);
};

exports.update = async (req, res) => {
  try {
    await AddtnlDeduction.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).send("Additional Deduction updated successfully");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    await AddtnlDeduction.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).send("Additional Deduction deleted successfully.");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
