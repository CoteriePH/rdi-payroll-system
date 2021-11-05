"use strict";
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "users",
      [
        {
          id: uuidv4(),
          username: "encoder",
          password: bcrypt.hashSync("encoder", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
          username: "auditor",
          password: bcrypt.hashSync("auditor", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
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
