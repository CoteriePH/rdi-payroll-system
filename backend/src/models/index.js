const config = require("../config/config.js");
const { Sequelize, DataTypes, Op } = require("sequelize");

const sequelize = new Sequelize(
  config.db.DB_NAME,
  config.db.DB_USER,
  config.db.DB_PASS,
  {
    host: config.db.DB_HOST,
    dialect: config.db.dialect,
    poll: {
      max: config.db.pool.max,
      min: config.db.pool.min,
      acquire: config.db.pool.acquire,
      idle: config.db.pool.idle,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.Op = Op;
db.sequelize = sequelize;

/**
 * Models
 */

db.user = require("./user.model.js")(sequelize, Sequelize, DataTypes);
db.employee = require("./employee.model.js")(sequelize, Sequelize, DataTypes);
db.company = require("./company.model.js")(sequelize, Sequelize, DataTypes);
db.file = require("./file.model.js")(sequelize, Sequelize, DataTypes);
db.payroll = require("./payroll")(sequelize, Sequelize, DataTypes);
db.deduction = require("./deduction.model.js")(sequelize, Sequelize, DataTypes);
db.schedule = require("./schedule.model.js")(sequelize, Sequelize, DataTypes);
db.addtnl_deduction = require("./addtnl_deduction.model")(
  sequelize,
  Sequelize,
  DataTypes
);
db.earning = require("./earning.model.js")(sequelize, Sequelize, DataTypes);
db.attendance = require("./attendance.model.js")(
  sequelize,
  Sequelize,
  DataTypes
);

db.department = require("./department.model.js")(
  sequelize,
  Sequelize,
  DataTypes
);
db.position = require("./position.model.js")(sequelize, Sequelize, DataTypes);
db.request = require("./request.model.js")(sequelize, Sequelize, DataTypes);
db.additionalEarnings = require("./additional_earnings.model.js")(
  sequelize,
  Sequelize,
  DataTypes
);
db.cash_advance = require("./cash_advance.model")(
  sequelize,
  Sequelize,
  DataTypes
);
db.entry = require("./entry.model.js")(sequelize, Sequelize, DataTypes);

/**
 * Relationships
 */

//OneToMany Relationship (One Company-> Many Employees)
db.employee.belongsTo(db.company, {
  foreignKey: { name: "company_id", allowNull: false },

  foreignKeyConstraint: true,
});
db.company.hasMany(db.employee, { as: "employees", foreignKey: "company_id" });

//OneToMany Relationship (One Department-> Many Employees)
db.employee.belongsTo(db.department, {
  foreignKey: { name: "department_id", allowNull: false },
  foreignKeyConstraint: true,
});
db.department.hasMany(db.employee, {
  as: "employees",
  foreignKey: "company_id",
});

//OneToMany Relationship (One Position -> Many Employees)
db.employee.belongsTo(db.position, {
  foreignKey: { name: "position_id", allowNull: false },
  foreignKeyConstraint: true,
});
db.position.hasMany(db.employee, {
  as: "employees",
  foreignKey: "position_id",
});

//OneToMany (One company  ---> Many departments)
db.department.belongsTo(db.company, {
  foreignKey: { name: "company_id", allowNull: false },
  foreignKeyConstraint: true,
});
db.company.hasMany(db.department, {
  as: "departments",
  foreignKey: "company_id",
});

//OneToMany (One department  ---> Many position)
db.position.belongsTo(db.department, {
  foreignKey: { name: "department_id", allowNull: false },
  foreignKeyConstraint: true,
});
db.department.hasMany(db.position, {
  as: "positions",
  foreignKey: "department_id",
});

//OneToMany - (One Employee ----> MANY attendnace)
db.attendance.belongsTo(db.employee, {
  foreignKey: { name: "employee_id", allowNull: false },
});
db.employee.hasMany(db.attendance, {
  as: "attendances",
  foreignKey: "employee_id",
});

//OneToMany - (One Employee ----> MANY entries)
db.entry.belongsTo(db.employee, {
  foreignKey: { name: "employee_id", allowNull: false },
});
db.employee.hasMany(db.entry, {
  as: "entries",
  foreignKey: "employee_id",
});

//OneToMany - (One Attendance ----> MANY entries)
db.entry.belongsTo(db.attendance, {
  foreignKey: { name: "attendance_id", allowNull: false },
});
db.attendance.hasMany(db.entry, {
  as: "entries",
  foreignKey: "attendance_id",
});

//OneToMany - (One schedule ----> Many employee)
db.employee.belongsTo(db.schedule, {
  foreignKey: { name: "schedule_id", allowNull: false },
});
db.schedule.hasMany(db.employee, {
  as: "schedules",
  foreignKey: "schedule_id",
});

//TODO - prone to error (add (after create) listener on employee model)
//OneAndOnlyONE (One Employee  ---> One File)
db.file.belongsTo(db.employee, {
  foreignKey: { name: "employee_id", allowNull: false },
  foreignKeyConstraint: true,
});
db.employee.hasOne(db.file, {
  as: "files",
  foreignKey: "employee_id",
});

//OneAndOnlyONE (One Employee  ---> one deduction)
db.deduction.belongsTo(db.employee, {
  foreignKey: { name: "employee_id", allowNull: false },
  foreignKeyConstraint: true,
});
db.employee.hasOne(db.deduction, {
  as: "deduction",
  foreignKey: "employee_id",
});

//OneAndOnlyONE (One Employee  ---> one earnings)
db.earning.belongsTo(db.employee, {
  foreignKey: { name: "employee_id", allowNull: false },
  foreignKeyConstraint: true,
});
db.employee.hasOne(db.earning, {
  as: "earning",
  foreignKey: "employee_id",
});

//OneAndOnlyONE (One earning  ---> one additional earnings)

db.earning.hasOne(db.additionalEarnings, {
  as: "additional_earnings",
  foreignKey: "earning_id",
});

db.additionalEarnings.belongsTo(db.earning, {
  foreignKey: { name: "earning_id", allowNull: false },
  foreignKeyConstraint: true,
});

//OneAndOnlyONE (One deduction  ---> one additional deduction)
db.addtnl_deduction.belongsTo(db.deduction, {
  foreignKey: { name: "deduction_id", allowNull: false },
  foreignKeyConstraint: true,
});
db.deduction.hasOne(db.addtnl_deduction, {
  as: "additional_deduction",
  foreignKey: "deduction_id",
});

//OneToMany (One employee  ---> Many cash advance)
db.cash_advance.belongsTo(db.employee, {
  foreignKey: { name: "employee_id", allowNull: false },
  foreignKeyConstraint: true,
});
db.employee.hasMany(db.cash_advance, {
  as: "cash_advances",
  foreignKey: "employee_id",
});
module.exports = db;

//OneToMany (One employee  ---> Many Payroll)
db.payroll.belongsTo(db.employee, {
  foreignKey: { name: "employee_id", allowNull: false },
  foreignKeyConstraint: true,
});
db.employee.hasMany(db.payroll, {
  as: "payrolls",
  foreignKey: "employee_id",
});
module.exports = db;

//OneAndOnlyONE (One earnings  ---> one payroll)
db.earning.belongsTo(db.payroll, {
  foreignKey: { name: "employee_id", allowNull: false },
  foreignKeyConstraint: true,
});
db.payroll.hasOne(db.earning, {
  as: "earning",
  foreignKey: "employee_id",
});

//OneAndOnlyONE (One deductions  ---> one payroll)
db.deduction.belongsTo(db.payroll, {
  foreignKey: { name: "employee_id", allowNull: false },
  foreignKeyConstraint: true,
});
db.payroll.hasOne(db.deduction, {
  as: "deduction",
  foreignKey: "employee_id",
});
