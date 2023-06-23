const Movie = require('../models/movieModel');

// Controller methods for movies

// Get all movies
exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new movie
exports.createMovie = async (req, res) => {
  try {
    const { name, yearOfRelease, producer, actors } = req.body;
    const movie = new Movie({ name, yearOfRelease, producer, actors });
    const newMovie = await movie.save();
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an existing movie
exports.updateMovie = async (req, res) => {
  try {
    const { name, yearOfRelease, producer, actors } = req.body;
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    movie.name = name;
    movie.yearOfRelease = yearOfRelease;
    movie.producer = producer;
    movie.actors = actors;
    const updatedMovie = await movie.save();
    res.json(updatedMovie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a movie
exports.deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    await movie.de();
    res.json({ message: 'Movie deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
