const db = require("../models");
const rashiController = require("./rashiController");
const rashiFal = db.rashi_fal;
const Op = db.Op;
const config = require("../config/config");

const rashiNumber = [
  {
    db_rashi_number: 1,
    site_rashi_number: 13
  },
  {
    db_rashi_number: 2,
    site_rashi_number: 15
  },
  {
    db_rashi_number: 3,
    site_rashi_number: 16
  },
  {
    db_rashi_number: 4,
    site_rashi_number: 19
  },
  {
    db_rashi_number: 5,
    site_rashi_number: 17
  },
  {
    db_rashi_number: 6,
    site_rashi_number: 18
  },
  {
    db_rashi_number: 7,
    site_rashi_number: 20
  },
  {
    db_rashi_number: 8,
    site_rashi_number: 14
  },
  {
    db_rashi_number: 9,
    site_rashi_number: 21
  },
  {
    db_rashi_number: 10,
    site_rashi_number: 22
  },
  {
    db_rashi_number: 11,
    site_rashi_number: 23
  },
  {
    db_rashi_number: 12,
    site_rashi_number: 24
  }
]

// Create and Save a new Rashifal
exports.create = (req, res) => {
  // Validate request
  if (
    !req.body.rashi_name ||
    !req.body.dainik ||
    !req.body.dainik_duration ||
    !req.body.dainik_arogya ||
    !req.body.dainik_prem ||
    !req.body.dainik_karkirdi ||
    !req.body.saptahic ||
    !req.body.saptahic_duration ||
    !req.body.saptahic_arogya ||
    !req.body.saptahic_prem ||
    !req.body.saptahic_karkirdi ||
    !req.body.masic ||
    !req.body.masic_duration ||
    !req.body.masic_arogya ||
    !req.body.masic_prem ||
    !req.body.masic_karkirdi ||
    !req.body.varshik ||
    !req.body.varshik_duration ||
    !req.body.varshik_arogya ||
    !req.body.varshik_prem ||
    !req.body.varshik_karkirdi
  ) {
    res.status(400).send({
      message: "rashifal details can not be empty!",
    });
    return;
  }

  // Create a Rashifal
  const rashifal = {
    rashi_name: req.body.rashi_name,
    dainik: req.body.dainik,
    dainik_duration: req.body.dainik_duration,
    dainik_arogya: req.body.dainik_arogya,
    dainik_prem: req.body.dainik_prem,
    dainik_karkirdi: req.body.dainik_karkirdi,
    saptahic: req.body.saptahic,
    saptahic_duration: req.body.saptahic_duration,
    saptahic_arogya: req.body.saptahic_arogya,
    saptahic_prem: req.body.saptahic_prem,
    saptahic_karkirdi: req.body.saptahic_karkirdi,
    masic: req.body.masic,
    masic_duration: req.body.masic_duration,
    masic_arogya: req.body.masic_arogya,
    masic_prem: req.body.masic_prem,
    masic_karkirdi: req.body.masic_karkirdi,
    varshik: req.body.varshik,
    varshik_duration: req.body.varshik_duration,
    varshik_arogya: req.body.varshik_arogya,
    varshik_prem: req.body.varshik_prem,
    varshik_karkirdi: req.body.varshik_karkirdi,
  };

  // Save Rashifal in database
  rashiFal
    .create(rashifal)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the rashifal.",
      });
    });
};

// Find a single Rashifal with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  rashiFal
    .findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving Rashifal with id = ${id}`,
      });
    });
};

const updateAllDainik = () => {
    // rashiNumber.forEach((obj) => {
      const result = rashiController({
        num: 13,
        class: config.CLASS_NAME,
        puppeteerArgs: [],
      }).then(data => {
        console.log(data);
      });
    // });
}

// Find a single Rashifal with an id
exports.findAllDainik = (req, res) => {
  // updateAllDainik();
  // return res.send({});
  rashiFal
    .findAll({
      attributes: [
        "rashi_name",
        ["dainik", "content"],
        ["dainik_duration", "duration"],
        ["dainik_arogya", "arogya"],
        ["dainik_prem", "prem"],
        ["dainik_karkirdi", "karkirdi"],
      ],
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving Dainik Rashifal`,
      });
    });
};

exports.findAllSaptahic = (req, res) => {
  rashiFal
    .findAll({
      attributes: [
        "rashi_name",
        ["saptahic", "content"],
        ["saptahic_duration", "duration"],
        ["saptahic_arogya", "arogya"],
        ["saptahic_prem", "prem"],
        ["saptahic_karkirdi", "karkirdi"],
      ],
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving Saptahic Rashifal`,
      });
    });
};

exports.findAllMasic = (req, res) => {
  rashiFal
    .findAll({
      attributes: [
        "rashi_name",
        ["masic", "content"],
        ["masic_duration", "duration"],
        ["masic_arogya", "arogya"],
        ["masic_prem", "prem"],
        ["masic_karkirdi", "karkirdi"],
      ],
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving Masic Rashifal`,
      });
    });
};

exports.findAllVarshik = (req, res) => {
  rashiFal
    .findAll({
      attributes: [
        "rashi_name",
        ["varshik", "content"],
        ["varshik_duration", "duration"],
        ["varshik_arogya", "arogya"],
        ["varshik_prem", "prem"],
        ["varshik_karkirdi", "karkirdi"],
      ],
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving Varshik Rashifal`,
      });
    });
};

// Update a Rashifal by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  rashiFal
    .update(req.body, {
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Rashifal was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Rashifal with id=${id}. Maybe Rashifal was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Rashifal with id=" + id,
      });
    });
};

// Delete a Rashifal with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  rashiFal
    .destroy({
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Rashifal was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Rashifal with id=${id}. Maybe Rashifal was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Rashifal with id=" + id,
      });
    });
};
