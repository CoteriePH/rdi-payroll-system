const controller = require("../controllers/entry.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );

    next();
  });

  app.post("/entries", controller.create);
  app.get("/entries/:id", controller.findOne);
  app.get("/entries", controller.findAll);
  app.delete("/entries/:id", controller.delete);
  app.patch("/entries/", controller.update);
};
