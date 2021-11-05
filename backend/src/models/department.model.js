module.exports = (sequelize, Sequelize, DataTypes) => {
    const Department = sequelize.define(
      "department", // Model name
      {
        // Attributes
        id:{
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        name:{
            type: DataTypes.STRING(30),
            allowNull:false,
        },
        
      },
      {
        timestamps: true,
        underscrored: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
      }
    );
  
    return Department;
  };