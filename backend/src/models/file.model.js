const { nanoid } = require("nanoid");

module.exports = (sequelize, Sequelize, DataTypes) => {
  const File = sequelize.define(
    "file", // Model name
    {
      // Attributes
      id: {
        type: DataTypes.UUID,
        defaultValue: nanoid(10),
        primaryKey: true,
        allowNull: false,
      },
      nbi: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nso: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sss: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      qr_code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      biometric_code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      philhealth: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bir: {
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

  return File;
};
