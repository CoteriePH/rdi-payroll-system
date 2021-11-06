const controller = require("../controllers/cash_advance.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );

    next();
  });

  app.post("/cash-advance", controller.create);
  app.get("/cash-advance/:id", controller.findOne);
  app.get("/cash-advance", controller.findAll);
  app.delete("/cash-advance/:id", controller.delete);
  app.patch("/cash-advance/:id", controller.update);
};
