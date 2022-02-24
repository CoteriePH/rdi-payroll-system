"use strict";
const { v4: uuidv4 } = require("uuid");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("schedules", [
      {
        id: uuidv4(),
        start_time: "6:00",
        end_time: "14:30",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuidv4(),
        start_time: "14:00",
        end_time: "22:30",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuidv4(),
        start_time: "22:00",
        end_time: "6:30",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuidv4(),
        start_time: "7:00",
        end_time: "16:00",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuidv4(),
        start_time: "8:30",
        end_time: "17:30",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuidv4(),
        start_time: "9:00",
        end_time: "18:00",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuidv4(),
        start_time: "8:00",
        end_time: "17:00",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("schedules", null, {});
  },
};
