module.exports = (app) => {
  const homePageController = require("../controllers/homePage.controller");
  const { authJwt } = require("../middlewares");

  const router = require("express").Router();

  // Create a new Quote
  router.post("/", [authJwt.verifyToken], homePageController.create);

  router.put("/:id", [authJwt.verifyToken], homePageController.update);

  // Retrieve a single Quote with id
  router.get("/:id", [authJwt.verifyToken], homePageController.findOneHome);

  app.use("/api/homepage-texts", router);
};
