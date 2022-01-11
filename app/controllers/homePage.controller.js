const db = require("../models");
const homePage = db.homepage_text;
const Op = db.Op;

exports.create = (req, res) => {
  if (
    !req.body.dainik_title ||
    !req.body.dainik_subtitle ||
    !req.body.dainik_image ||
    !req.body.saptahic_title ||
    !req.body.saptahic_subtitle ||
    !req.body.saptahic_image ||
    !req.body.masic_title ||
    !req.body.masic_subtitle ||
    !req.body.varshik_title ||
    !req.body.varshik_subtitle ||
    !req.body.varshik_image ||
    !req.body.samachar_gujarat ||
    !req.body.samachar_bharat ||
    !req.body.samachar_videsh ||
    !req.body.bhagvan_img_url ||
    !req.body.mataji_img_url ||
    !req.body.sant_img_url ||
    !req.body.suvichar ||
    !req.body.slok ||
    !req.body.prerna_dayak_vaky ||
    !req.body.gita_gyan ||
    !req.body.chanakya_niti ||
    !req.body.ajb_gajab ||
    !req.body.jokes ||
    !req.body.shayri ||
    !req.body.dainik_date ||
    !req.body.saptahic_date ||
    !req.body.masic_date ||
    !req.body.varshik_date ||
    !req.body.ads
  ) {
    res.status(400).send({
      message: "quote can not be empty!",
    });
    return;
  }
  req.body.ads = JSON.stringify(req.body.ads);
  homePage
    .create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the Homepage Texts.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  homePage
    .findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving Homepage Text with id = ${id}`,
      });
    });
};

exports.update = (req, res) => {
  req.body.ads = JSON.stringify(req.body.ads);
  const id = req.params.id;
  homePage
    .update(req.body, {
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Homepage Text was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Homepage Text with id=${id}. Maybe Homepage Text was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Homepage Text with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  homePage
    .destroy({
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Homepage Text was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Homepage Text with id=${id}. Maybe Homepage Text was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete HomePage Text with id=" + id,
      });
    });
};
