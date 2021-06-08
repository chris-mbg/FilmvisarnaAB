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

const getMovieById = async (req, res) => {
  Movie.findById(req.params.movieId).exec(async (err, movie) => {
    if (err) {
      throw new Error("error message: ", err);
    }
    return res.json(movie);
  });
};

const getFilteredMovies = async (req, res) => {
  console.log("QUERY", req.query);

  if (Object.keys(req.query).length === 0) {
    try {
      let movies = await Movie.find().exec();
      return res.json(movies);
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
      throw error;
    }
  } else {
    try {
      const obj = {
        // ageLimit: "PG-11",
        director: "Don Hall",
        language: "Engelska",
        // length: "123",
      };

      const queryObj = [];

      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          let object = {};
          object[key] = obj[key]
          queryObj.push(object)
        }
      }

      console.log("::queryObj:::", queryObj, typeof queryObj);

      let movies = await Movie.find({$or: queryObj}).exec();
      return res.json(movies);
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
      throw error;
    }
  }
};

module.exports = {
  getAllMovies,
  getMovieById,
  getFilteredMovies,
};
