module.exports = (sequelize, Sequelize, DataTypes) => {
  const Payroll = sequelize.define(
    "payroll", // Model name
    {
      // Attributes
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      pr_date_start: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      pr_date_processed: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      _13_m_pay: {
        type: DataTypes.DECIMAL(19, 4),
        allowNull: false,
      },
      total_salary: {
        type: DataTypes.DECIMAL(19, 4),
        allowNull: false,
      },
      sick_leave_pay: {
        type: DataTypes.DECIMAL(19, 4),
        allowNull: false,
      },
      sunday_pay: {
        type: DataTypes.DECIMAL(19, 4),
        allowNull: false,
      },
      net_pay: {
        type: DataTypes.DECIMAL(19, 4),
        allowNull: false,
      },
      gross_pay: {
        type: DataTypes.DECIMAL(19, 4),
        allowNull: false,
      },
      less_deduction: {
        type: DataTypes.DECIMAL(19, 4),
        allowNull: false,
      },
      basic_pay: {
        type: DataTypes.DECIMAL(19, 4),
        allowNull: false,
      },
      separation_pay: {
        type: DataTypes.DECIMAL(19, 4),
        allowNull: false,
      },
      bonus_incentives: {
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

  return Payroll;
};
