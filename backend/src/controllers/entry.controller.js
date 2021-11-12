const res = require("express/lib/response");
const db = require("../models");
const { Op, sequelize, Sequelize } = require("../models");
const Entry = db.entry;
const {
  totalRunningTime,
} = require("../helpers/entry.helper");


//TEST FOR NEW DAYS
//dateNow.setDate(dateNow.getDate() + 1);

exports.create = async (req, res) => {
  try {
    //retrive data from db
    let entry = await Entry.findOne({ 
      attributes:['entries'],
      raw: true,
      where: {
      [Op.and]: [
          {employee_id: req.body.employee_id},
          {entries: 2},
          {date: new Date().toDateString()},
      ]
    },
    });

    //INIT
    let entry_details = req.body;

    //MODIFY FIELDS
    if(entry != null){
      
        let lastEntry = await Entry.max('entries',{ 
          raw: true,
          where: {
            [Op.and]: [
              {employee_id: req.body.employee_id},
              {date: new Date().toDateString()},
            ]
        },
        });
        
        entry_details.entries = lastEntry+1;
      
    }
    else{
      entry_details.entries = 1;
    }

    entry_details.time_in = Date.now();
    entry_details.time_out = null;
    entry_details.running_time = null;
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

    let entry = await Entry.findOne({ 
      attributes:['time_in', 'time_out'],
      raw: true,
      where: {
      [Op.and]: [
          {employee_id: req.body.employee_id},
          {time_out:{[Op.ne]: null}},
      ]
    },
    });
    

    let timeOut = entry.time_out.getTime()
    let timeIn = entry.time_in.getTime()

    await Entry.update({
      running_time:totalRunningTime(timeIn,timeOut),
      computed: true,
    },{where: {
      [Op.and]: [
        {employee_id: req.body.employee_id},
        {computed:false},
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
