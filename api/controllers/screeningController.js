const Screening = require("../models/Screening");

const getScreeningsByMovieId = async (req, res) => {
  const { movieId } = req.params;

  try {
    // .find() with movieId as filter parameter
    let screenings = await Screening.find({ movieId: movieId }).exec();
    return res.json(screenings);
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
};

module.exports = {
  getScreeningsByMovieId,
};
