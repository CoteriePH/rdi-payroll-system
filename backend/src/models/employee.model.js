module.exports = (sequelize, Sequelize, DataTypes) => {
  const Employee = sequelize.define(
    "employee", // Model name
    {
      // Attributes
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      cash_advance_eligibility: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sex: {
        type: DataTypes.ENUM({
          values: ["MALE", "FEMALE"],
        }),
        defaultValue: "MALE",
        allowNull: false,
      },
      middle_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      birth_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      street: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      province: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      postal_code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
        unique: {
          args: true,
          msg: "Email address already in use!",
        },
      },
      contact_no: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      employee_type: {
        type: DataTypes.ENUM({
          values: ["REGULAR", "CONTRACTUAL"], //TODO - ADD MORE TYPES
        }),
        defaultValue: "REGULAR",
        allowNull: false,
      },
      date_hired: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      time_shift: {
        type: DataTypes.ENUM({
          values: [
            "SCHEDULE_A",
            "SCHEDULE_B",
            "SCHEDULE_C",
            "SCHEDULE_D",
            "SCHEDULE_E",
            "SCHEDULE_F",
            "SCHEDULE_G",
          ], //TODO - ADD MORE TYPES
        }),
        defaultValue: "SCHEDULE_A",
        allowNull: false,
      },
    },
    {
      timestamps: true,
      underscrored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return Employee;
};
