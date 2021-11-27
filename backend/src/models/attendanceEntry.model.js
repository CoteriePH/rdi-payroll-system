module.exports = (sequelize, Sequelize, DataTypes) => {
  const AttendanceEntry = sequelize.define(
    "attendanceEntry", // Model name
    {
      // Attributes
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      time_in: {
        type: DataTypes.TIME,
        default: null,
        allowNull: true,
      },
      time_out: {
        type: DataTypes.TIME,
        default: null,
        allowNull: true,
      },
      accuracy: {
        type: DataTypes.DECIMAL(5, 2),
        default: null,
        allowNull: true,
      },
      total_running_time: {
        type: DataTypes.DECIMAL(5, 2),
        default: null,
        allowNull: true,
      },
      entries: {
        type: DataTypes.INTEGER,
        default: null,
        allowNull: true,
      },
      tardiness: {
        type: DataTypes.BOOLEAN,
        default: null,
        allowNull: true,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      status_time_in: {
        type: DataTypes.ENUM({
          values: ["ON TIME", "LATE IN"],
        }),
        default: null,
        allowNull: true,
      },
      status_time_out: {
        type: DataTypes.ENUM({
          values: ["ON TIME", "EARLY OUT"],
        }),
        default: null,
        allowNull: true,
      },
      absent: {
        type: DataTypes.ENUM({
          values: ["EMERGENCY", "LEAVE", "ABSENT"],
        }),
        default: "ABSENT",
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

  return AttendanceEntry;
};
