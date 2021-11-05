"use strict";
const { nanoid } = require("nanoid");
const bcrypt = require("bcryptjs");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("companies", [
      {
        id: nanoid(10),
        name: "Company 1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: nanoid(10),
        name: "Company 2",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: nanoid(10),
        name: "Company 3",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: nanoid(10),
        name: "Company 4",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("companies", null, {});
  },
};
