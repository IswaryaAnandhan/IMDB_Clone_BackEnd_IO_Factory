const Producer = require('../models/producerModel');

// Controller methods for producers

// Get all producers
exports.getAllProducers = async (req, res) => {
  try {
    const producers = await Producer.find();
    res.json(producers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new producer
exports.createProducer = async (req, res) => {
  try {
    const { name, gender, dob, bio } = req.body;
    const producer = new Producer({ name, gender, dob, bio });
    const newProducer = await producer.save();
    res.status(201).json(newProducer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an existing producer
exports.updateProducer = async (req, res) => {
  try {
    const { name, gender, dob, bio } = req.body;
    const producer = await Producer.findById(req.params.id);
    if (!producer) {
      return res.status(404).json({ message: 'Producer not found' });
    }
    producer.name = name;
    producer.gender = gender;
    producer.dob = dob;
    producer.bio = bio;
    const updatedProducer = await producer.save();
    res.json(updatedProducer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a producer
exports.deleteProducer = async (req, res) => {
  try {
    const producer = await Producer.findById(req.params.id);
    if (!producer) {
      return res.status(404).json({ message: 'Producer not found' });
    }
    await producer.deleteOne();
    res.json({ message: 'Producer deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
