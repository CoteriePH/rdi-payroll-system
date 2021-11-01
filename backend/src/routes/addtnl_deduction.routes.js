const controller = require("../controllers/addtnl_deduction.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );

    next();
  });

  app.get("/addtnl-deductions", controller.findAll);
  app.post("/addtnl-deductions", controller.create);
  app.get("/addtnl-deductions/:id", controller.findOne);
  app.delete("/addtnl-deductions/:id", controller.delete);
  app.patch("/addtnl-deductions/:id", controller.update);
};
