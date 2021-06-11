const Movie = require("../models/Movie");
const Screening = require("../models/Screening");

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
  const userQuery = req.query;

  // checked the object for the presence of values, if there are none, I get all the movies
  if (Object.keys(userQuery).length === 0) {
    try {
      let movies = await Movie.find().exec();
      return res.json(movies);
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
      throw error;
    }
  } else {
    try {
      let movies = [];
  
      for (let i in userQuery) {
        console.log("INSIDE LOOP", i, userQuery, userQuery[i], typeof i);
        if ("startTime" in userQuery) {
          const minStartTime = new Date(userQuery.startTime + " 00:00");
          const maxStartTime = new Date(userQuery.startTime + " 23:00");

          let movie = await Screening.where({
            startTime: { $gte: minStartTime, $lte: maxStartTime },
          }).exec();
          movies = [...movie];
        }
        if ("minLength" in userQuery && "maxLength" in userQuery) {
          const minLength = parseInt(userQuery.minLength) || 0;
          const maxLength = parseInt(userQuery.maxLength) || 136;

          let movie = await Movie.where({
            length: { $gte: minLength, $lte: maxLength },
          }).exec();
          movies = [...movie];
        }

        if (
          "actors" in userQuery || "director" in userQuery ) {
          const actorsQuery = new RegExp(`^${userQuery.actors}\\w*`, "gi");
          const directorsQuery = new RegExp(`^${userQuery.director}\\w*`, "gi");
          let movie = await Movie.find({
            $or: [{ actors: { $in: [actorsQuery] } }, { director: directorsQuery }],
          }).exec();
          movies = [...movie];
        }

        if("title" in userQuery){
            titleQuery = new RegExp(`^${userQuery[i]}\\w*`, "gi");
            let movie = await Movie.find({
              $or: [{ title : titleQuery }, {description: titleQuery }, {director: titleQuery }],
            }).exec();
            movies = [...movie]; 
        }

        if ("genre" in userQuery || "ageLimit" in userQuery || "language" in userQuery || "price" in userQuery){
          let movie = await Movie.find({
            $or: [{ genre : userQuery.genre }, { ageLimit: userQuery.ageLimit }, { language: userQuery.language }, {price : parseInt(userQuery.price) }],
          }).exec();
          movies = [...movie];
        }
      }
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
