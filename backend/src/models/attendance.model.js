module.exports = (sequelize, Sequelize, DataTypes) => {
  const Attendance = sequelize.define(
    "attendance", // Model name
    {
      // Attributes
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      total_running_time: {
        type: DataTypes.DECIMAL(19, 2),
        defaultValue: 0,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM({
          values: ["ACTIVE", "ENDED"],
        }),
        allowNull: true,
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
