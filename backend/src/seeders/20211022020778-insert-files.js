"use strict";
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const employees = await queryInterface.sequelize.query(
      `SELECT id FROM employees;`
    );

    const employeeRows = employees[0];

    return await queryInterface.bulkInsert("files", [
      {
        id: uuidv4(),
        nbi: "NBI LINK",
        nso: "NSO LINK",
        sss: "SSS LINK",
        sss: "QR CODE LINK",
        biometric_code: "BIO CODE LINK",
        philhealth: "PHILHEALTH LINK",
        qr_code: "QR CODE LINK",
        bir: "BIR LINK",
        created_at: new Date(),
        updated_at: new Date(),
        employee_id: employeeRows[0].id,
      },
      {
        id: uuidv4(),
        nbi: "NBI LINK",
        nso: "NSO LINK",
        sss: "SSS LINK",
        sss: "QR CODE LINK",
        biometric_code: "BIO CODE LINK",
        philhealth: "PHILHEALTH LINK",
        qr_code: "QR CODE LINK",

        bir: "BIR LINK",
        created_at: new Date(),
        updated_at: new Date(),
        employee_id: employeeRows[1].id,
      },
      {
        id: uuidv4(),
        nbi: "NBI LINK",
        nso: "NSO LINK",
        sss: "SSS LINK",
        qr_code: "QR CODE LINK",

        sss: "QR CODE LINK",
        biometric_code: "BIO CODE LINK",
        philhealth: "PHILHEALTH LINK",
        bir: "BIR LINK",
        created_at: new Date(),
        updated_at: new Date(),
        employee_id: employeeRows[2].id,
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("files", null, {});
  },
};
