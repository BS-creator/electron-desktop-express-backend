var Models = require('../models');
var Offering = Models.Offering;
require('dotenv').config();

exports.index = async function (req, res) {
  console.log('retrive offerings');
  let offerings = await Offering.find({});
  res.status(200).send(offerings)
};

exports.store = async function (req, res) {
  console.log('create new offering');
  let offering = new Offering(req.body); // this is model object.
  offering.save()
    .then((data) => {
      res.status(201).send({ 'message': 'Created successfully', 'offering': data });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: 'failed', message: err.message });
    })
};

exports.update = async function (req, res) {
  console.log('update offering')
  let offering = req.body;
  var updated = await Offering.findOneAndUpdate({ _id: req.params.offeringId }, offering, { new: true })
  if (updated) {
    res.status(200).send({ 'message': 'Updated successfully', 'offering': updated });
  } else {
    res.status(200).send({ 'message': 'No exists', 'offering': updated });
  }
};

exports.destroy = async function (req, res) {
  console.log('delete offering')
  var deleted = await Offering.findOneAndDelete({ _id: req.params.offeringId })
  if (deleted) {
    res.status(200).send({ 'message': 'Deleted successfully', 'offering': deleted });
  } else {
    res.status(200).send({ 'message': 'No exists', 'offering': deleted });
  }
};