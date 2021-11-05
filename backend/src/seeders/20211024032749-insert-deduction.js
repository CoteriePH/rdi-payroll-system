"use strict";
const { nanoid } = require("nanoid");
const bcrypt = require("bcryptjs");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const employees = await queryInterface.sequelize.query(
      `SELECT id FROM employees;`
    );

    const employeeRows = employees[0];
    return await queryInterface.bulkInsert("deductions", [
      {
        id: nanoid(10),
        sss_contribution: Math.floor(Math.random() * 300),
        pagibig_funds: Math.floor(Math.random() * 300),
        pagibig_loans: Math.floor(Math.random() * 300),
        philhealth_loans: Math.floor(Math.random() * 300),
        cash_advance: Math.floor(Math.random() * 300),
        others: Math.floor(Math.random() * 300),
        total: Math.floor(Math.random() * 300),
        created_at: new Date(),
        updated_at: new Date(),
        employee_id: employeeRows[0].id,
      },
      {
        id: nanoid(10),
        sss_contribution: Math.floor(Math.random() * 300),
        pagibig_funds: Math.floor(Math.random() * 300),
        pagibig_loans: Math.floor(Math.random() * 300),
        philhealth_loans: Math.floor(Math.random() * 300),
        cash_advance: Math.floor(Math.random() * 300),
        others: Math.floor(Math.random() * 300),
        total: Math.floor(Math.random() * 300),
        created_at: new Date(),
        updated_at: new Date(),
        employee_id: employeeRows[1].id,
      },
      {
        id: nanoid(10),
        sss_contribution: Math.floor(Math.random() * 300),
        pagibig_funds: Math.floor(Math.random() * 300),
        pagibig_loans: Math.floor(Math.random() * 300),
        philhealth_loans: Math.floor(Math.random() * 300),
        cash_advance: Math.floor(Math.random() * 300),
        others: Math.floor(Math.random() * 300),
        total: Math.floor(Math.random() * 300),
        created_at: new Date(),
        updated_at: new Date(),
        employee_id: employeeRows[2].id,
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("deductions", null, {});
  },
};
