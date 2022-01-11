module.exports = (app) => {
  const rashiFalController = require("../controllers/rashiFal.controller.js");
  const { authJwt } = require("../middlewares");

  const router = require("express").Router();

  // Create a new Quote
  router.post("/", [authJwt.verifyToken], rashiFalController.create);

  // Retrieve a single Quote with id
  router.get("/:id", [authJwt.verifyToken], rashiFalController.findOne);

  // Retrieve a single Quote with id
  router.get(
    "/all/dainik",
    [authJwt.verifyToken],
    rashiFalController.findAllDainik
  );
  router.get(
    "/all/saptahic",
    [authJwt.verifyToken],
    rashiFalController.findAllSaptahic
  );
  router.get(
    "/all/masic",
    [authJwt.verifyToken],
    rashiFalController.findAllMasic
  );
  router.get(
    "/all/varshik",
    [authJwt.verifyToken],
    rashiFalController.findAllVarshik
  );

  // Update a Quote with id
  router.put("/:id", [authJwt.verifyToken], rashiFalController.update);

  // Delete a Quote with id
  router.delete("/:id", [authJwt.verifyToken], rashiFalController.delete);

  app.use("/api/rashi-fal", router);
};
