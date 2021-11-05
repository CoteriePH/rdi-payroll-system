const { nanoid } = require("nanoid");
module.exports = (sequelize, Sequelize, DataTypes) => {
  const AddtnlDeduction = sequelize.define(
    "addtnl_deduction", // Model name
    {
      // Attributes
      id: {
        type: DataTypes.UUID,
        defaultValue: nanoid(10),
        primaryKey: true,
        allowNull: false,
      },
      wtax: {
        type: DataTypes.DECIMAL(19, 4),
        allowNull: false,
      },
      others: {
        type: DataTypes.DECIMAL(19, 4),
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      total: {
        type: DataTypes.DECIMAL(19, 4),
        allowNull: false,
      },
      remarks: {
        type: DataTypes.STRING,
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

  return AddtnlDeduction;
};
