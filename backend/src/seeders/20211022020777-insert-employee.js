"use strict";
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const departments = await queryInterface.sequelize.query(
      `SELECT id FROM departments;`
    );

    const departmentRows = departments[0];

    const companies = await queryInterface.sequelize.query(
      `SELECT id FROM companies;`
    );

    const companyRows = companies[0];

    const positions = await queryInterface.sequelize.query(
      `SELECT id FROM positions;`
    );

    const positionRows = positions[0];

    const schedules = await queryInterface.sequelize.query(
      `SELECT id FROM schedules;`
    );

    const scheduleRows = schedules[0];

    return await queryInterface.bulkInsert("employees", [
      {
        id: uuidv4(),
        first_name: "John",
        middle_name: "Margo",
        last_name: "Doe",
        birth_date: new Date(),
        email: "john@gmail.com",
        contact_no: "09881112222",
        employee_type: "REGULAR",
        sex: "MALE",
        street: "Milky Way",
        city: "Zamboanga",
        province: "Quezon",
        postal_code: "4301",
        date_hired: "2018-6-1",
        time_shift: "SCHEDULE_A",
        created_at: new Date(),
        updated_at: new Date(),
        company_id: companyRows[0].id,
        department_id: departmentRows[0].id,
        position_id: positionRows[1].id,
        schedule_id: scheduleRows[0].id,
        basic_pay: Math.floor(537),
      },
      {
        id: uuidv4(),
        first_name: "Johnny",
        middle_name: "Margarita",
        last_name: "Doe",
        birth_date: new Date(),
        email: "johnny@gmail.com",
        contact_no: "09881112222",
        employee_type: "REGULAR",
        date_hired: "2018-6-1",
        sex: "MALE",
        street: "Milky Way",
        city: "Zamboanga",
        province: "Quezon",
        postal_code: "4301",
        time_shift: "SCHEDULE_A",
        created_at: new Date(),
        updated_at: new Date(),
        company_id: companyRows[1].id,
        department_id: departmentRows[1].id,
        position_id: positionRows[2].id,
        schedule_id: scheduleRows[0].id,
        basic_pay: Math.floor(Math.random() * 300),
      },
      {
        id: uuidv4(),
        first_name: "Juana",
        middle_name: "Margi",
        sex: "FEMALE",
        last_name: "Doe",
        street: "Milky Way",
        city: "Zamboanga",
        province: "Quezon",
        postal_code: "4301",
        birth_date: new Date(),
        email: "juana@gmail.com",
        contact_no: "09881112222",
        employee_type: "REGULAR",
        date_hired: "2018-6-1",
        time_shift: "SCHEDULE_C",
        created_at: new Date(),
        updated_at: new Date(),
        company_id: companyRows[1].id,
        department_id: departmentRows[1].id,
        position_id: positionRows[3].id,
        schedule_id: scheduleRows[0].id,
        basic_pay: Math.floor(Math.random() * 300),
      },
      {
        id: uuidv4(),
        first_name: "Jonnah",
        middle_name: "Mariaju",
        last_name: "Doe",
        birth_date: new Date(),
        email: "jonnah@gmail.com",
        contact_no: "09881112222",
        employee_type: "REGULAR",
        sex: "FEMALE",
        street: "Milky Way",
        city: "Zamboanga",
        province: "Quezon",
        postal_code: "4301",
        date_hired: "2018-6-1",
        time_shift: "SCHEDULE_D",
        created_at: new Date(),
        updated_at: new Date(),
        company_id: companyRows[2].id,
        department_id: departmentRows[3].id,
        position_id: positionRows[3].id,
        schedule_id: scheduleRows[0].id,
        basic_pay: Math.floor(Math.random() * 300),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("employees", null, {});
  },
};
