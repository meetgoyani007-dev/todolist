const db = require("../models");
const task = db.task;
const Op = db.Op;

// Create and Save a new task
exports.create = (req, res) => {
  // Validate request
  
  if (!req.body.description || !req.body.status) {
    res.status(400).send({
      message: `task can not be empty! && ${
        (JSON.stringify(req.body))
      }`,
    });
    return;
  }

  // Create a task
  const task = {
    description: req.body.description,
    status: req.body.status
  };
  // Save task in database
  task
    .create(quote)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the task.",
      });
    });
};

// Find a single task with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  task
    .findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving task with id = ${id}`,
      });
    });
};

// getAllTask
exports.findAll = (req, res) => {

  task
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving tasks`,
      });
    });
};

// Update a task by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  task
    .update(req.body, {
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Task was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update task with id=${id}. Maybe task was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating task with id=" + id,
      });
    });
};

// Delete a task with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  task
    .destroy({
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "task was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete task with id=${id}. Maybe task was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete task with id=" + id,
      });
    });
};
