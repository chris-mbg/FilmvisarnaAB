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
      
        for (let i in userQuery){
        if ( i === "startTime" || i === "price" || i === "auditoriumName") {
        
          let requestObj = {};
          let queryName =userQuery[i]
          requestObj[i] = queryName;
          
          await Screening.find( requestObj, { movieId: 1} ).populate("movieId").then( dbMovies => { 
            const mappedMovies = dbMovies.map(item => item.movieId)
            movies = [...new Set(mappedMovies)]
          })
        } else {
          let requestObj = {};
          let queryName = null;

         if (i !== "productionYear" ) {
           queryName = new RegExp(`^${userQuery[i]}\\w*`, "gi")
          } else {
            queryName =userQuery[i]
          }
          requestObj[i] = queryName;

console.log(requestObj, typeof requestObj)
          let movie = await Movie.find(requestObj).exec();
          movies= [...movie]
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
