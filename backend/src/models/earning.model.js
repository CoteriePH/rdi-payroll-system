module.exports = (sequelize, Sequelize, DataTypes) => {
  const Earning = sequelize.define(
    "earning", // Model name
    {
      // Attributes
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      basic_pay: {
        type: DataTypes.DECIMAL(19, 4),
        allowNull: false,
      },
      overtime_rate: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
      },
      night_differential: {
        type: DataTypes.DECIMAL(19, 4),
        allowNull: false,
      },
      sunday_pay: {
        type: DataTypes.DECIMAL(19, 4),
        allowNull: false,
      },
      legal_holiday: {
        type: DataTypes.DECIMAL(19, 4),
        allowNull: false,
      },
      special_holiday: {
        type: DataTypes.DECIMAL(19, 4),
        allowNull: false,
      },
      total: {
        type: DataTypes.DECIMAL(19, 4),
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

  return Earning;
};
