const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: String,
  businessType: String,
  businessDescription: String,
  projectDescription: String,
  websiteType: String,
  websiteKind: String,
  backend: String,
  budget: Number,
});

module.exports = mongoose.model('Enquiry', enquirySchema);
