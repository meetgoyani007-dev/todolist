const db = require("../models");
const ads = db.ads;
const Op = db.Op;

// Create and Save a new Ad
exports.create = (req, res) => {
  // Validate request
  if (!req.body.ad_id || !req.body.status || !req.body.page_name) {
    res.status(400).send({
      message: "Ad can not be empty!",
    });
    return;
  }

  // Create a Ad
  const quote = {
    ad_id: req.body.ad_id,
    status: req.body.status,
    page_name: req.body.page_name,
  };

  // Save Ad in database
  ads
    .create(quote)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Ad.",
      });
    });
};

// Find a single Ad with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  ads
    .findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving Ad with id = ${id}`,
      });
    });
};

// Find all Ads
exports.findAll = (req, res) => {
  const id = req.params.id;

  ads
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving Ad with id = ${id}`,
      });
    });
};

// Update a Ad by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  ads
    .update(req.body, {
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Ad was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Ad with id=${id}. Maybe Ad was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Ad with id=" + id,
      });
    });
};

// Delete a Ad with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  ads
    .destroy({
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Ad was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Ads with id=${id}. Maybe Ad was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Ad with id=" + id,
      });
    });
};
