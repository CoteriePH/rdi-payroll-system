const db = require("../models");
const AdditionalEarnings = db.additionalEarnings;

exports.create = async (req, res) => {
  try {
    const new_additional_earnings = await AdditionalEarnings.create(req.body);
    return res.status(200).send(new_additional_earnings);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.findAll = async (req, res) => {
  const additional_earnings = await AdditionalEarnings.findAll();
  return res.status(200).send(additional_earnings);
};

exports.findOne = async (req, res) => {
  const additional_earnings = await AdditionalEarnings.findByPk(req.params.id);
  return res.status(200).send(additional_earnings);
};

//TODO ADD ADDITIONAL EARNINGS TOTAL LOGIC
exports.update = async (req, res) => {
  try {
    await AdditionalEarnings.update(req.body, {
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
    await AdditionalEarnings.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).send("Earning deleted successfully.");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
