module.exports = (sequelize, Sequelize, DataTypes) => {
    const additionalEarnings = sequelize.define(
        "additional_earnings", // Model name
        {
            // Attributes
            id: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            employee_id: {
                type: DataTypes.DECIMAL(19, 4),
                allowNull: false,
            },
            reimbursement: {
                type: DataTypes.DECIMAL(19, 4),
                allowNull: false,
            },
            additional: {
                type: DataTypes.DECIMAL(19, 4),
                allowNull: false,
            },
            others: {
                type: DataTypes.DECIMAL(19, 4),
                allowNull: false,
            },
            date: {
                type: DataTypes.DATE(),
                allowNull: false,
            },
            total: {
                type: DataTypes.DECIMAL(19, 4),
                allowNull: false,
            },
            remarks: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            timestamps: true,
            underscrored: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
        }
        );
  
    return additionalEarnings;
  };
  