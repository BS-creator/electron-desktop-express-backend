var mongoose = require('mongoose');

const SecurityDataSchema = new mongoose.Schema({
  ID: { type: String, required: true },
  open: { type: Number, required: true },
  high: { type: Number, required: true },
  peRatio: { type: Number, required: true },
  divYield: { type: Number, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  }
});

const SecurityData = mongoose.model('SecurityData', SecurityDataSchema);

module.exports = SecurityData;