const controller = require("../controllers/attendance.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );

    next();
  });

  app.get("/attendances/:id", controller.findOne);
  app.get("/attendances", controller.findAll);
  app.delete("/attendances/:id", controller.delete);
  app.patch("/attendances/:id", controller.update);
};
