module.exports = (sequelize, Sequelize, DataTypes) => {
    const Schedule = sequelize.define(
      "schedule", // Model name
      {
        // Attributes
        id:{
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        schedule:{
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
  
    return Schedule;
  };
  