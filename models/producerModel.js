const mongoose = require('mongoose');

const producerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: Date, required: true },
  bio: { type: String },
});

const Producer = mongoose.model('Producer', producerSchema);

module.exports = Producer;
