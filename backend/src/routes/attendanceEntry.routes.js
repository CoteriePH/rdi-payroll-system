const controller = require("../controllers/attendanceEntry.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );

    next();
  });

  app.post("/attendanceentries", controller.create);
  app.get("/attendanceentries/:id", controller.findOne);
  app.get("/attendanceentries", controller.findAll);
  app.delete("/attendanceentries/:id", controller.delete);
  app.patch("/attendanceentries/:id", controller.update);
};
