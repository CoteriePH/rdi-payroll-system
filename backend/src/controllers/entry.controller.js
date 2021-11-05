const res = require("express/lib/response");
const db = require("../models");
const Entry = db.entry;

exports.create = async (req, res) => {
  try {
    //INIT
    let attendance_details = req.body;

    //MODIFY FIELDS
    attendance_details.time_in = Date.now();
    attendance_details.time_out = null;
    attendance_details.running_time = null;
    attendance_details.entries = 1;
    attendance_details.date = Date.now();

    //save
    const new_entry = await Entry.create(entry_details);
    return res.status(200).send(new_entry);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.findAll = async (req, res) => {
  const entry = await Entry.findAll();
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
