const Actor = require('../models/actorModel');

// Controller methods for actors

// Get all actors
exports.getAllActors = async (req, res) => {
  try {
    const actors = await Actor.find();
    res.json(actors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new actor
exports.createActor = async (req, res) => {
  try {
    const { name, gender, dob, bio } = req.body;
    const actor = new Actor({ name, gender, dob, bio });
    const newActor = await actor.save();
    res.status(201).json(newActor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an existing actor
exports.updateActor = async (req, res) => {
  try {
    const { name, gender, dob, bio } = req.body;
    const actor = await Actor.findById(req.params.id);
    if (!actor) {
      return res.status(404).json({ message: 'Actor not found' });
    }
    actor.name = name;
    actor.gender = gender;
    actor.dob = dob;
    actor.bio = bio;
    const updatedActor = await actor.save();
    res.json(updatedActor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an actor
exports.deleteActor = async (req, res) => {
  try {
    const actor = await Actor.findById(req.params.id);
    if (!actor) {
      return res.status(404).json({ message: 'Actor not found' });
    }
    await actor.deleteOne();
    res.json({ message: 'Actor deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
