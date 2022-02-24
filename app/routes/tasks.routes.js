module.exports = (app) => {
  const taskController = require("../controllers/tasks.controller.js");
  const { verifySignUp, authJwt } = require("../middlewares");

  const router = require("express").Router();

  // Create a new Task
  router.post("/", [authJwt.verifyToken], taskController.create);

  // Retrieve a single Task with id
  router.get("/:id", [authJwt.verifyToken], taskController.findOne);

  // Update a Task with id
  router.put("/:id", [authJwt.verifyToken], taskController.update);

  // Delete a Task with id
  router.delete("/:id", [authJwt.verifyToken], taskController.delete);

  router.get("/", [authJwt.verifyToken], taskController.findAll);

  app.use("/api/tasks", router);
};
