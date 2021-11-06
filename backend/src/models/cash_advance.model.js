module.exports = (sequelize, Sequelize, DataTypes) => {
  const CashAdvance = sequelize.define(
    "cash_advance", // Model name
    {
      // Attributes
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      amount_borrowed: {
        type: DataTypes.DECIMAL(19, 4),
        allowNull: false,
      },
      salary_deduction: {
        type: DataTypes.DECIMAL(19, 4),
        allowNull: false,
      },
      no_of_payments: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      date_from: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      date_to: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM({
          values: ["PROCESSED", "UNPROCESSED"],
        }),
        defaultValue: "UNPROCESSED",
        allowNull: false,
      },
      ca_status: {
        type: DataTypes.ENUM({
          values: ["PAID", "INCOMPLETE", "DELAYED"],
        }),
        defaultValue: "INCOMPLETE",
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

  return CashAdvance;
};
