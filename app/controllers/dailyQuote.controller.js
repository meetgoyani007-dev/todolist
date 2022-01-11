const db = require("../models");
const dailyQuote = db.daily_quote;
const Op = db.Op;

// Create and Save a new Quote
exports.create = (req, res) => {
  // Validate request
  if (!req.body.quote) {
    res.status(400).send({
      message: "quote can not be empty!",
    });
    return;
  }

  // Create a Quote
  const quote = {
    quote: req.body.quote,
    image_url: req.body.image_url,
  };

  // Save Quote in database
  dailyQuote
    .create(quote)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Quote.",
      });
    });
};

// Find a single Quote with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  dailyQuote
    .findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving Quote with id = ${id}`,
      });
    });
};

// Update a Quote by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  dailyQuote
    .update(req.body, {
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Quote was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Quote with id=${id}. Maybe Quote was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Quote with id=" + id,
      });
    });
};

// Delete a Quote with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  dailyQuote
    .destroy({
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Quote was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Quote with id=${id}. Maybe Quote was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Quote with id=" + id,
      });
    });
};
