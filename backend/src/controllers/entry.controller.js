const res = require("express/lib/response");
const db = require("../models");
const { Op, sequelize, Sequelize } = require("../models");
const Entry = db.entry;


exports.create = async (req, res) => {
  try {
    //INIT
    let entry_details = req.body;

    //MODIFY FIELDS
    entry_details.time_in = Date.now();
    entry_details.time_out = null;
    entry_details.running_time = null;
    entry_details.entries = 1;
    entry_details.date = Date.now();

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

    let entry = Entry.findOne({ 
        attributes:['time_in'],
        where: {
        [Op.and]: [
            {employee_id: req.body.employee_id},
            {time_out: null},
            {date: new Date().toDateString()}
        ]
      },
     });

     let timeIn = entry.time_in

     let {time_out} = req.body;

    await Entry.update({
        time_out: Date.now(),
        running_time:null,
        entries: sequelize.literal('entries + 1'),
    },{where: {
        [Op.and]: [
            {employee_id: req.body.employee_id},
            {time_out: null},
            {date: new Date().toDateString()}
        ]
      },}
      
    );
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
