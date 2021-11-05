const { nanoid } = require("nanoid");
module.exports = (sequelize, Sequelize, DataTypes) => {
  const Attendance = sequelize.define(
    "attendance", // Model name
    {
      // Attributes
      id: {
        type: DataTypes.UUID,
        defaultValue: nanoid(10),
        primaryKey: true,
        allowNull: false,
      },
      time_in: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      time_out: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      accuracy: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: true,
      },
      total_running_time: {
        type: DataTypes.DECIMAL(4, 2),
        allowNull: true,
      },
      entries: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      tardiness: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      status_time_in: {
        type: DataTypes.ENUM({
          values: ["ON TIME", "LATE IN"],
        }),
        allowNull: true,
      },
      status_time_out: {
        type: DataTypes.ENUM({
          values: ["ON TIME", "EARLY OUT"],
        }),
        allowNull: true,
      },
      absent: {
        type: DataTypes.ENUM({
          values: ["EMERGENCY", "LEAVE", "ABSENT"],
        }),
        allowNull: true,
      },
    },
    {
      timestamps: true,
      underscrored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return Attendance;
};
