const controller = require("../controllers/schedule.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );

    next();
  });

  app.get("/schedules", controller.findAll);
  app.get("/schedules/:id", controller.findOne);
  app.post("/schedules", controller.create);
  app.patch("/schedules/:id", controller.update);
  app.delete("/schedules/:id", controller.delete);
};
