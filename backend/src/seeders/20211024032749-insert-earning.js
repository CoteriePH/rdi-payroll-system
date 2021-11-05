"use strict";
const { nanoid } = require("nanoid");
const bcrypt = require("bcryptjs");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const employees = await queryInterface.sequelize.query(
      `SELECT id FROM employees;`
    );

    const employeeRows = employees[0];
    return await queryInterface.bulkInsert("earnings", [
      {
        id: nanoid(10),
        basic_pay: Math.floor(Math.random() * 300),
        overtime_rate: Math.floor(Math.random() * 300),
        night_differential: Math.floor(Math.random() * 300),
        sunday_pay: Math.floor(Math.random() * 300),
        legal_holiday: Math.floor(Math.random() * 300),
        special_holiday: Math.floor(Math.random() * 300),
        total: Math.floor(Math.random() * 300),
        created_at: new Date(),
        updated_at: new Date(),
        employee_id: employeeRows[0].id,
      },
      {
        id: nanoid(10),
        basic_pay: Math.floor(Math.random() * 300),
        overtime_rate: Math.floor(Math.random() * 300),
        night_differential: Math.floor(Math.random() * 300),
        sunday_pay: Math.floor(Math.random() * 300),
        legal_holiday: Math.floor(Math.random() * 300),
        special_holiday: Math.floor(Math.random() * 300),
        total: Math.floor(Math.random() * 300),
        created_at: new Date(),
        updated_at: new Date(),
        employee_id: employeeRows[1].id,
      },
      {
        id: nanoid(10),
        basic_pay: Math.floor(Math.random() * 300),
        overtime_rate: Math.floor(Math.random() * 300),
        night_differential: Math.floor(Math.random() * 300),
        sunday_pay: Math.floor(Math.random() * 300),
        legal_holiday: Math.floor(Math.random() * 300),
        special_holiday: Math.floor(Math.random() * 300),
        total: Math.floor(Math.random() * 300),
        created_at: new Date(),
        updated_at: new Date(),
        employee_id: employeeRows[2].id,
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("earnings", null, {});
  },
};
