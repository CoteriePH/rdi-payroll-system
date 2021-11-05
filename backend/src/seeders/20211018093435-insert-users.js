"use strict";
const { nanoid } = require("nanoid");
const bcrypt = require("bcryptjs");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "users",
      [
        {
          id: nanoid(10),
          username: "encoder",
          password: bcrypt.hashSync("encoder", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: nanoid(10),
          username: "auditor",
          password: bcrypt.hashSync("auditor", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: nanoid(10),
          username: "admin",
          password: bcrypt.hashSync("admin", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
