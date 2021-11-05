module.exports = (sequelize, Sequelize, DataTypes) => {
    const Position = sequelize.define(
      "position", // Model name
      {
        // Attributes
        id:{
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        name:{
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
  
    return Position;
  };
  