"use strict";
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    

    return await queryInterface.bulkInsert("schedules", [
      {
        id: uuidv4(),
        schedule: "6:00 am -  2:30 pm",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuidv4(),
        schedule: "2:00 pm – 10:30 pm",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuidv4(),
        schedule: "10:00 pm – 6:30 am",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuidv4(),
        schedule: "7:00 am – 4:00 pm",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuidv4(),
        schedule: "8:30 am – 5:30 pm",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuidv4(),
        schedule: "9:00 am – 6:00 pm",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuidv4(),
        schedule: "8:00 am – 5:00 pm",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("schedules", null, {});
  },
};
