module.exports = (app) => {
  const adsController = require("../controllers/ads.controller.js");
  const { verifySignUp, authJwt } = require("../middlewares");

  const router = require("express").Router();

  // Create a new Ad
  router.post("/", [authJwt.verifyToken], adsController.create);

  // Retrieve a single Ad with id
  router.get("/:id", [authJwt.verifyToken], adsController.findOne);

  // Retrieve all Ads
  router.get("/", [authJwt.verifyToken], adsController.findAll);

  // Update a Ad with id
  router.put("/:id", [authJwt.verifyToken], adsController.update);

  // Delete a Ad with id
  router.delete("/:id", [authJwt.verifyToken], adsController.delete);

  app.use("/api/ads", router);
};
