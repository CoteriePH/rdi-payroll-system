const { nanoid } = require("nanoid");

module.exports = (sequelize, Sequelize, DataTypes) => {
  const User = sequelize.define(
    "user", // Model name
    {
      // Attributes
      id: {
        type: DataTypes.UUID,
        defaultValue: nanoid(10),
        primaryKey: true,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {},
        unique: {
          args: true,
          msg: "Username address already in use!",
        },
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      role: {
        type: DataTypes.ENUM({
          values: ["ADMIN", "ENCODER", "AUDITOR"], //TODO - ADD MORE TYPES
        }),
        defaultValue: "ENCODER",
        allowNull: false,
      },
    },
    {
      scopes: {
        withoutPassword: {
          attributes: { exclude: ["password"] },
        },
      },
      timestamps: true,
      underscrored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return User;
};
