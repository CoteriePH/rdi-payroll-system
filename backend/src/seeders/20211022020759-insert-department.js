"use strict";
const { nanoid } = require("nanoid");
const bcrypt = require("bcryptjs");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const companies = await queryInterface.sequelize.query(
      `SELECT id FROM companies;`
    );

    const companyRows = companies[0];

    return await queryInterface.bulkInsert("departments", [
      {
        id: nanoid(10),
        name: "D1",
        created_at: new Date(),
        updated_at: new Date(),
        company_id: companyRows[0].id,
      },
      {
        id: nanoid(10),
        name: "D2",
        created_at: new Date(),
        updated_at: new Date(),
        company_id: companyRows[0].id,
      },
      {
        id: nanoid(10),
        name: "D3",
        created_at: new Date(),
        updated_at: new Date(),
        company_id: companyRows[1].id,
      },
      {
        id: nanoid(10),
        name: "D4",
        created_at: new Date(),
        updated_at: new Date(),
        company_id: companyRows[2].id,
      },
      {
        id: nanoid(10),
        name: "D5",
        created_at: new Date(),
        updated_at: new Date(),
        company_id: companyRows[3].id,
      },
      {
        id: nanoid(10),
        name: "D6",
        created_at: new Date(),
        updated_at: new Date(),
        company_id: companyRows[3].id,
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("departments", null, {});
  },
};
