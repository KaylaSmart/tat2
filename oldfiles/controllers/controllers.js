const db = require('../models/dex');
const Form = db.form;
// const Op = db.Sequelize.Op;

// Create and Save a new Form Entry
exports.create = (req, res) => {
  if(!req.body.name){
      res.status(400).send({
          message: " Please enter your name"
      });
      return;
    }

    const form = {
        title: req.body.title,
        phone: req.body.phone,
        email: req.body.email,
        event: req.body.event,
        quantity: req.body.quantity,
        date: req.body.date,
        indoor: req.body.indoor,
        outdoor: req.body.outdoor,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        custom: req.body.custom,
        reach: req.body.reach,
        comments:req.body.comments
    };

    Form.create(form)
        .them(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while submitting your info, please email events@crystylesairbrushtattoos.com"
            });
        });
};