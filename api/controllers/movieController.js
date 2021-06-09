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
  // gets a JSON string from the frontend, destructure it
  const { request } = req.params;

  console.log("REQUEST", request);
  // parse the JSON string => get the object
  const userQuery = JSON.parse(request);

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

/* GLÖM INTE ATT TA BORT */

// GET - search for posts - /search
// const search_get = async (req, res) => {
//   // Filters
//   const category = req.query.category || "all";
//   const sort = req.query.sort || "asc"; // Set default to "ascending"
//   const minDate = req.query.min_date || "2020-01"; // Set default to: "2020-01"
//   const maxDate = req.query.max_date || "2021-12"; // set default to: "2021-12"

//   await Post.find({
//     $and: [
//       { updatedAt: { $gte: minDate, $lte: maxDate } },
//       req.query.category ? {} : { category: category },
//       req.query.text
//         ? {}
//         : {
//             $or: [{ title: req.query.title }, { content: req.query.content }],
//           },
//     ],
//   })
//     .sort({ updatedAt: sort })
//     .exec(function (error, result) {
//       if (error) {
//         return res.sendStatus(404);
//       } else {
//         return res.status(200).json({
//           status: "success",
//           message: "Successfully retrieved list of all posts.",
//           data: { result },
//         });
//       }
//     });
// };

/* GLÖM INTE ATT TA BORT */

module.exports = {
  getAllMovies,
  getMovieById,
  getFilteredMovies,
};
