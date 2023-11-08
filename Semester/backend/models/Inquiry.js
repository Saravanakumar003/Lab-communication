const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
  issueType: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Inquiry = mongoose.model('Inquiry', inquirySchema);

module.exports = Inquiry;
