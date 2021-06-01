const Screening = require("../models/Screening");

const getScreeningsByMovieId = async (req, res) => {
  const { movieId } = req.params;

  try {
    // .find() with movieId as filter parameter and all screenings regardless of date
    //let screenings = await Screening.find({ movieId: movieId }).exec();

    // Screenings from when the request is made and onwards
    const now = new Date();
    console.log(now)
    let screenings = await Screening.find({ movieId: movieId }).where('startTime').gte(now).sort("startTime").populate("movieId").exec();
    return res.json(screenings);
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
};

const getScreeningById = async (req, res) => {
  Movie.findById(req.params.screeningId).exec(async(err, screening) => {
    if(err) {
      throw new Error ('error message: ', err)
    }
    return res.json(screening)
  })
}

module.exports = {
  getScreeningsByMovieId,
  getScreeningById,
};
