module.exports = (sequelize, Sequelize, DataTypes) => {
    const Attendance = sequelize.define(
      "attendance", // Model name
      {
        // Attributes
        id:{
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        time_in:{
            type: DataTypes.TIME,
            allowNull:true,
        },
        time_out:{
            type: DataTypes.TIME,
            allowNull:true,
        },
        accuracy:{
            type: DataTypes.DECIMAL(5,2),
            allowNull:true,
        },
        total_running_time:{
            type: DataTypes.DECIMAL(4,2),
            allowNull:true,
        },
        entries:{
            type: DataTypes.INTEGER,
            allowNull:true,
        },
        tardiness:{
            type: DataTypes.BOOLEAN,
            allowNull:false,
        },
        date:{
            type: DataTypes.DATE,
            allowNull:false,
        },
        status_time_in:{
            type: DataTypes.ENUM({
                values: ["In Time", "Late In"],
              }),
            allowNull:true,
        },
        status_time_out:{
            type: DataTypes.ENUM({
                values: ["On Time", "Early Out"],
              }),
            allowNull:true,
        },
        absent:{
            type: DataTypes.ENUM({
                values: ["Emergency", "Leave", "Absent"],
              }),
            allowNull:true,
        },
        
      },
      {
        timestamps: true,
        underscrored: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
      }
    );
  
    return Attendance;
  };