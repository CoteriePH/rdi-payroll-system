const res = require("express/lib/response");
const db = require("../models");
const { Op, sequelize, Sequelize } = require("../models");
const Entry = db.entry;
const {
  totalRunningTime,
  datePH,
  timePH,
} = require("../helpers/entry.helper");


let dates = new Date();

exports.create = async (req, res) => {
  try {
    //INIT
    let entry_details = req.body;
    //retrive data from db
    let duplicate = await Entry.findOne({
      attributes:['id'],
      raw: true,
      where: {
      [Op.and]: [
          {employee_id: req.body.employee_id},
          {time_out: null},
          {date: datePH(dates)},
      ]
    },
    });



    if(duplicate == null){

      let entry = await Entry.findOne({ 
        attributes:['entries'],
        raw: true,
        where: {
        [Op.and]: [
            {employee_id: req.body.employee_id},
            {entries: 2},
            {date: datePH(dates)},
        ]
      },
      });
  
  
      //MODIFY FIELDS
      if(entry != null){
        
          let lastEntry = await Entry.max('entries',{ 
            raw: true,
            where: {
              [Op.and]: [
                {employee_id: req.body.employee_id},
                {date: new Date()},
              ]
          },
          });
          
          entry_details.entries = lastEntry+1;
        
      }
      else{
        entry_details.entries = 1;
      }
  
      entry_details.time_in = timePH();
      entry_details.time_out = null;
      entry_details.running_time = null;
      entry_details.date = Date.now();
  
    //save
    const new_entry = await Entry.create(entry_details);
    return res.status(200).send(new_entry);
    }
    else{
      return res.status(400).send("you already timed in.");
    }
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
        time_out: timePH(),
        running_time:null,
        entries: sequelize.literal('entries + 1'),
    },{where: {
        [Op.and]: [
            {employee_id: req.body.employee_id},
            {time_out: null},
            {date: new Date()}
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
          {computed:false},
      ]
    },
    });
    

    let timeOut = entry.time_out.getTime();
    let timeIn = entry.time_in.getTime();

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
