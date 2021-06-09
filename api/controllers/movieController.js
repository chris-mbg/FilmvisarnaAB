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
  const userQuery = req.query;
  // todo delete
  console.log("req.query", req.query, typeof req.query);

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
    /**
     * get a specific movies, depending on the request (userQuery === object)
     * { ageLimit: 'PG-11',
     *   director: 'Don Hall',
     *   language: 'Engelska'
     *  }
     */
    try {
      //  create an array where each key-value pair is stored in a separate object
      const queryObj = [];

      for (let key in userQuery) {
        if (userQuery.hasOwnProperty(key)) {
          let object = {};
          let queryName = new RegExp(`^${userQuery[key]}\\w*`, "gi");
          object[key] = queryName;
          queryObj.push(object);
        }
      }
      // todo delete
      console.log("::queryObj:::", queryObj, typeof queryObj);

      /**
       *
       * let movies = await Movie.find({ $or: [
       *                                          { ageLimit: 'PG-11' },
       *                                          { director: 'Don Hall' },
       *                                          { language: 'Engelska' },
       *                                        ]
       * }).exec();
       */

      /**
       * examle of queryObj
       * ::queryObj:::[
       * { ageLimit: 'PG-11' },
       * { director: 'Don Hall' },
       * { language: 'Engelska' },
       * ]
       * */

      let movies = await Movie.find({ $or: queryObj }).exec();
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
