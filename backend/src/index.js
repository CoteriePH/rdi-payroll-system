const express = require("express");
const cors = require("cors");
const config = require("./config/config");
require("dotenv").config();

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

//parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database
const db = require("./models");
db.sequelize.sync().then(() => {
  //REGISTER ROUTES
  require("./routes/user.routes")(app);
  require("./routes/auth.routes")(app);
  require("./routes/employee.routes")(app);
  require("./routes/company.routes")(app);
  require("./routes/position.routes")(app);
  require("./routes/department.routes")(app);
  require("./routes/file.routes")(app);
  require("./routes/earning.routes")(app);
  require("./routes/deduction.routes")(app);
  require("./routes/request.routes")(app);
  require("./routes/attendance.routes")(app);
  require("./routes/addtnl_deduction.routes")(app);
  // set port, listen for requests
  const PORT = config.PORT;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
