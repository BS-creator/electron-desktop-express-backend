var Models = require('../models');
var SecurityData = Models.SecurityData;
require('dotenv').config();

exports.index = async function (req, res) {
  console.log('retrive securityDatas');
  let securityDatas = await SecurityData.find({});
  res.status(200).send(securityDatas)
};

exports.store = async function (req, res) {
  console.log('create new securityData');
  let securityData = new SecurityData(req.body); // this is model object.
  securityData.save()
    .then((data) => {
      res.status(201).send({ 'message': 'Created successfully', 'securityData': data });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: 'failed', message: err.message });
    })
};

exports.update = async function (req, res) {
  console.log('update securityData')
  let securityData = req.body;
  var updated = await SecurityData.findOneAndUpdate({ _id: req.params.securityDataId }, securityData, { new: true })
  if (updated) {
    res.status(200).send({ 'message': 'Updated successfully', 'securityData': updated });
  } else {
    res.status(200).send({ 'message': 'No exists', 'securityData': updated });
  }
};

exports.destroy = async function (req, res) {
  console.log('delete securityData')
  var deleted = await SecurityData.findOneAndDelete({ _id: req.params.securityDataId })
  if (deleted) {
    res.status(200).send({ 'message': 'Deleted successfully', 'securityData': deleted });
  } else {
    res.status(200).send({ 'message': 'No exists', 'securityData': deleted });
  }
};