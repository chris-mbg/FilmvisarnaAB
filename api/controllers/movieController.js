const Movie = require("../models/Movie");

const getAllMovies = async (req, res) => {
  try {
    let movies = await Movie.find().exec();
    return res.json(movies);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
    throw error;
  }
};

module.exports = {
  getAllMovies,
};
