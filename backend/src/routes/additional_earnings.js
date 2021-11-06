const controller = require("../controllers/additional_earnings.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );

    next();
  });

  app.post("/additional-earnings", controller.create);
  app.get("/additional-earnings/:id", controller.findOne);
  app.get("/additional-earnings", controller.findAll);
  app.delete("/additional-earnings/:id", controller.delete);
  app.patch("/additional-earnings/:id", controller.update);
};
