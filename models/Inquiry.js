var mongoose = require('mongoose');

const InquirySchema = new mongoose.Schema({
  symbol: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  side: { type: String, required: true },
  group: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  }
});

const Inquiry = mongoose.model('Inquiry', InquirySchema);

module.exports = Inquiry;