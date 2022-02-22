module.exports = (sequelize, Sequelize, DataTypes) => {
  const Entry = sequelize.define(
    "entry", // Model name
    {
      // Attributes
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      type: {
        type: DataTypes.ENUM({
          values: ["IN", "OUT"],
        }),
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

  return Entry;
};
