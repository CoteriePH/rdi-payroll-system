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
          role: "ENCODER",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
          username: "auditor",
          password: bcrypt.hashSync("auditor", 8),
          role: "AUDITOR",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
          username: "admin",
          role: "ADMIN",
          password: bcrypt.hashSync("admin", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {
        fields: [
          "id",
          "username",
          "password",
          "role",
          "created_at",
          "updated_at",
        ],
        updateOnDuplicate: ["role"],
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
