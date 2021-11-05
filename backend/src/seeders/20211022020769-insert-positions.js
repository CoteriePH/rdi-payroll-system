"use strict";
const { nanoid } = require("nanoid");
const bcrypt = require("bcryptjs");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const departments = await queryInterface.sequelize.query(
      `SELECT id FROM departments;`
    );

    const departmentRows = departments[0];

    return await queryInterface.bulkInsert("positions", [
      {
        id: nanoid(10),
        name: "P1",
        created_at: new Date(),
        updated_at: new Date(),
        department_id: departmentRows[0].id,
      },
      {
        id: nanoid(10),
        name: "P2",
        created_at: new Date(),
        updated_at: new Date(),
        department_id: departmentRows[0].id,
      },
      {
        id: nanoid(10),
        name: "P3",
        created_at: new Date(),
        updated_at: new Date(),
        department_id: departmentRows[0].id,
      },
      {
        id: nanoid(10),
        name: "P4",
        created_at: new Date(),
        updated_at: new Date(),
        department_id: departmentRows[1].id,
      },
      {
        id: nanoid(10),
        name: "P5",
        created_at: new Date(),
        updated_at: new Date(),
        department_id: departmentRows[1].id,
      },
      {
        id: nanoid(10),
        name: "P6",
        created_at: new Date(),
        updated_at: new Date(),
        department_id: departmentRows[1].id,
      },

      {
        id: nanoid(10),
        name: "P7",
        created_at: new Date(),
        updated_at: new Date(),
        department_id: departmentRows[2].id,
      },
      {
        id: nanoid(10),
        name: "P8",
        created_at: new Date(),
        updated_at: new Date(),
        department_id: departmentRows[2].id,
      },
      {
        id: nanoid(10),
        name: "P9",
        created_at: new Date(),
        updated_at: new Date(),
        department_id: departmentRows[2].id,
      },

      {
        id: nanoid(10),
        name: "P10",
        created_at: new Date(),
        updated_at: new Date(),
        department_id: departmentRows[3].id,
      },
      {
        id: nanoid(10),
        name: "P11",
        created_at: new Date(),
        updated_at: new Date(),
        department_id: departmentRows[3].id,
      },
      {
        id: nanoid(10),
        name: "P12",
        created_at: new Date(),
        updated_at: new Date(),
        department_id: departmentRows[3].id,
      },

      {
        id: nanoid(10),
        name: "P13",
        created_at: new Date(),
        updated_at: new Date(),
        department_id: departmentRows[4].id,
      },
      {
        id: nanoid(10),
        name: "P14",
        created_at: new Date(),
        updated_at: new Date(),
        department_id: departmentRows[4].id,
      },
      {
        id: nanoid(10),
        name: "P15",
        created_at: new Date(),
        updated_at: new Date(),
        department_id: departmentRows[4].id,
      },

      {
        id: nanoid(10),
        name: "P16",
        created_at: new Date(),
        updated_at: new Date(),
        department_id: departmentRows[5].id,
      },
      {
        id: nanoid(10),
        name: "P17",
        created_at: new Date(),
        updated_at: new Date(),
        department_id: departmentRows[5].id,
      },
      {
        id: nanoid(10),
        name: "P18",
        created_at: new Date(),
        updated_at: new Date(),
        department_id: departmentRows[5].id,
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("positions", null, {});
  },
};
