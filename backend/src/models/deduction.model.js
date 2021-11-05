module.exports = (sequelize, Sequelize, DataTypes) => {
    const Deduction = sequelize.define(
      "deduction", // Model name
      {
        // Attributes
        id:{
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        sss_contribution:{
            type: DataTypes.DECIMAL(19,4),
            allowNull:false,
        },
        pagibig_funds:{
            type: DataTypes.DECIMAL(19,4),
            allowNull:false,
        },
        pagibig_loans:{
            type: DataTypes.DECIMAL(19,4),
            allowNull:false,
        },
        philhealth_loans:{
            type: DataTypes.DECIMAL(19,4),
            allowNull:false,
        },
        cash_advance:{
            type: DataTypes.DECIMAL(19,4),
            allowNull:false,
        },
        others:{
            type: DataTypes.DECIMAL(19,4),
            allowNull:false,
        },
        total:{
            type: DataTypes.DECIMAL(19,4),
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
  
    return Deduction;
  };