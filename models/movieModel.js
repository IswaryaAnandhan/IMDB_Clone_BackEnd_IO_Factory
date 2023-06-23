const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  yearOfRelease: { type: Number, required: true },
  producer: { type: String, ref: 'Producer', required: true },
  actors: [{ type: String, ref: 'Actor' }],
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
