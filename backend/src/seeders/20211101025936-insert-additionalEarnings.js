"use strict";
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const employees = await queryInterface.sequelize.query(
      `SELECT id FROM employees;`
    );

    const employeeRows = employees[0];
    return await queryInterface.bulkInsert("additional_earnings", [
      {
        id: uuidv4(),
        employee_id: 11,
        reimbursement: Math.floor(Math.random() * 300),
        additional: Math.floor(Math.random() * 300),
        others: Math.floor(Math.random() * 300),
        date: new Date(),
        total: Math.floor(Math.random() * 300),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuidv4(),
        employee_id: 22,
        reimbursement: Math.floor(Math.random() * 300),
        additional: Math.floor(Math.random() * 300),
        others: Math.floor(Math.random() * 300),
        date: new Date(),
        total: Math.floor(Math.random() * 300),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuidv4(),
        employee_id: 33,
        reimbursement: Math.floor(Math.random() * 300),
        additional: Math.floor(Math.random() * 300),
        others: Math.floor(Math.random() * 300),
        date: new Date(),
        total: Math.floor(Math.random() * 300),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("additional_earnings", null, {});
  },
};
