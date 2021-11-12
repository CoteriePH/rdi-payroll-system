module.exports = (sequelize, Sequelize, DataTypes) => {
    const Entry = sequelize.define(
      "entry", // Model name
      {
        // Attributes
        id: {
          type: DataTypes.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          allowNull: false,
        },
        time_in: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        time_out: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        running_time: {
          type: DataTypes.DECIMAL(4, 2),
          allowNull: true,
        },
        entries: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        date: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
        computed: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
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
  