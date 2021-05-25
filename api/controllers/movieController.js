const Movie = require("../models/Movie");

const getAllMovies = async (req, res) => {
  try {
    let movies = await Movie.find().exec();
    return res.json(movies);
  } catch (err) {
    return res.status(404).json({error: "Something went wrong"});
  }
};

module.exports = {
  getAllMovies,
};
