const controller = require("../controllers/payroll");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );

    next();
  });

  app.post("/payroll", controller.create);
  app.get("/payroll/:id", controller.findOne);
  app.get("/payroll", controller.findAll);
  app.delete("/payroll/:id", controller.delete);
  app.patch("/payroll/:id", controller.update);
};
