"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("employees", {
      id: {
        type: Sequelize.UUID,
        defaultValue: nanoid(10),
        primaryKey: true,
        allowNull: false,
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      last_namee: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      middle_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      birth_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      contact_no: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      employee_type: {
        type: Sequelize.ENUM({
          values: ["REGULAR", "CONTRACTUAL"], //TODO - ADD MORE TYPES
        }),
        defaultValue: "REGULAR",
        allowNull: false,
      },
      date_hired: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      time_shift_from: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      time_shift_to: {
        type: Sequelize.TIME,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("employees");
  },
};
