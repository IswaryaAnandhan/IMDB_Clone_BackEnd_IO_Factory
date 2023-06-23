const express = require('express');
const cors = require("cors")
const app = express();
const config = require('./config');

// Middleware setup

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);
const db = require("./database.js")

// API routes
const actorsRoutes = require('./routes/actorsRoutes');
const moviesRoutes = require('./routes/moviesRoutes');
const producersRoutes = require('./routes/producersRoutes');

app.use('/api/actors', actorsRoutes);
app.use('/api/movies', moviesRoutes);
app.use('/api/producers', producersRoutes);

// Start the server
app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
