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

      const minLength = parseInt(userQuery.minLength) || 0;
      const maxLength = parseInt(userQuery.maxLength) || 236;
      const actorsQuery = new RegExp(`\\w*${userQuery.actors ?? ""}\\w*`, "gi");
      const directorsQuery = new RegExp(
        `\\w*${userQuery.director ?? ""}\\w*`,
        "gi"
      );
      const textSearchQuery = new RegExp(
        `\\w*${userQuery.textSearch ?? ""}\\w*`,
        "gi"
      );

      let screeningResults = [];
      if (userQuery.startTime) {
        const minStartTime = new Date(userQuery.startTime + " 00:00");
        const maxStartTime = new Date(userQuery.startTime + " 23:00");
        console.log("STart TIME", minStartTime)
        screeningResults = await Screening.find(
          {
            startTime: { $gte: minStartTime, $lte: maxStartTime },
          },
          { movieId: 1 }
        ).exec();

        screeningResults = screeningResults.map((value) => value.movieId);
      }

      // 60c326ac579ac038c4b685ae
      // 60c326ac579ac038c4b685a9
      // 60c326ac579ac038c4b685ac
      //{ $or: [...screeningResults] }

      let result = await Movie.find({
        $and: [
          { length: { $gte: minLength, $lte: maxLength } },
          { actors: actorsQuery },
          { director: directorsQuery },
          userQuery.genre ? { genre: userQuery.genre } : {},
          userQuery.price ? { price: parseInt(userQuery.price) } : {},
          userQuery.ageLimit ? { ageLimit: userQuery.ageLimit } : {},
          userQuery.language ? { language: userQuery.language } : {},
          screeningResults.length === 0
            ? {}
            : {
                $or: [
                  {
                    _id: screeningResults,
                  },
                ],
              },
          {
            $or: [
              { title: textSearchQuery },
              { description: textSearchQuery },
              { director: textSearchQuery },
              { actors: textSearchQuery },
            ],
          },
        ],
        // $or: [
        //   { title: textSearchQuery },
        //   { description: textSearchQuery },
        //   { director: textSearchQuery },
        //   { actors: textSearchQuery },
        // ],
      });

      res.json(result);

      // for (let i in userQuery) {
      //   console.log("INSIDE LOOP", i, userQuery, userQuery[i], typeof i);
      //   if ("startTime" in userQuery) {
      //     const minStartTime = new Date(userQuery.startTime + " 00:00");
      //     const maxStartTime = new Date(userQuery.startTime + " 23:00");

      //     await Screening.find(
      //       {
      //         startTime: { $gte: minStartTime, $lte: maxStartTime },
      //       },
      //       { movieId: 1 }
      //     )
      //       .populate("movieId")
      //       .then((dbMovies) => {
      //         const mappedMovies = dbMovies.map((item) => item.movieId);
      //         movies = [...mappedMovies];
      //       });
      //   }
      //   if ("minLength" in userQuery && "maxLength" in userQuery) {
      //     const minLength = parseInt(userQuery.minLength) || 0;
      //     const maxLength = parseInt(userQuery.maxLength) || 136;

      //     let movie = await Movie.where({
      //       length: { $gte: minLength, $lte: maxLength },
      //     }).exec();
      //     movies = [...movie];
      //   }

      //   if ("actors" in userQuery || "director" in userQuery) {
      //     const actorsQuery = new RegExp(`^${userQuery.actors}\\w*`, "gi");
      //     const directorsQuery = new RegExp(`^${userQuery.director}\\w*`, "gi");
      //     let movie = await Movie.find({
      //       $or: [
      //         { actors: { $in: [actorsQuery] } },
      //         { director: directorsQuery },
      //       ],
      //     }).exec();
      //     movies = [...movie];
      //   }

      //   if ("title" in userQuery) {
      //     titleQuery = new RegExp(`^${userQuery[i]}\\w*`, "gi");
      //     let movie = await Movie.find({
      //       $or: [
      //         { title: titleQuery },
      //         { description: titleQuery },
      //         { director: titleQuery },
      //       ],
      //     }).exec();
      //     movies = [...movie];
      //   }

      //   if (
      //     "genre" in userQuery ||
      //     "ageLimit" in userQuery ||
      //     "language" in userQuery ||
      //     "price" in userQuery
      //   ) {
      //     let movie = await Movie.find({
      //       $or: [
      //         { genre: userQuery.genre },
      //         { ageLimit: userQuery.ageLimit },
      //         { language: userQuery.language },
      //         { price: parseInt(userQuery.price) },
      //       ],
      //     }).exec();
      //     movies = [...movie];
      //   }
      // }
      // return res.json(movies);
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
