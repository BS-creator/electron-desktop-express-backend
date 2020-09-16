var Models = require('../models');
var Inquiry = Models.Inquiry;
require('dotenv').config();

exports.index = async function (req, res) {
  console.log('retrive inquires');
  let inquires = await Inquiry.find({});
  res.status(200).send(inquires)
};

exports.store = async function (req, res) {
  console.log('create new inquiry');
  let inquiry = new Inquiry(req.body); // this is model object.
  inquiry.save()
    .then((data) => {
      res.status(201).send({ 'message': 'Created successfully', 'inquiry': data });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: 'failed', message: err.message });
    })
};

exports.update = async function (req, res) {
  console.log('update inquiry')
  let inquiry = req.body;
  var updated = await Inquiry.findOneAndUpdate({ _id: req.params.inquiryId }, inquiry, { new: true })
  if (updated) {
    res.status(200).send({ 'message': 'Updated successfully', 'inquiry': updated });
  } else {
    res.status(200).send({ 'message': 'No exists', 'inquiry': updated });
  }
};

exports.destroy = async function (req, res) {
  console.log('delete inquiry')
  var deleted = await Inquiry.findOneAndDelete({ _id: req.params.inquiryId })
  if (deleted) {
    res.status(200).send({ 'message': 'Deleted successfully', 'inquiry': deleted });
  } else {
    res.status(200).send({ 'message': 'No exists', 'inquiry': deleted });
  }
};