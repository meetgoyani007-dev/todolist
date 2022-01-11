module.exports = (app) => {
  const dailyQuoteController = require("../controllers/dailyQuote.controller.js");
  const { verifySignUp, authJwt } = require("../middlewares");

  const router = require("express").Router();

  // Create a new Quote
  router.post("/", [authJwt.verifyToken], dailyQuoteController.create);

  // Retrieve a single Quote with id
  router.get("/:id", [authJwt.verifyToken], dailyQuoteController.findOne);

  // Update a Quote with id
  router.put("/:id", [authJwt.verifyToken], dailyQuoteController.update);

  // Delete a Quote with id
  router.delete("/:id", [authJwt.verifyToken], dailyQuoteController.delete);

  app.use("/api/daily-quote", router);
};
