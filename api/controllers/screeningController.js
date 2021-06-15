const Screening = require("../models/Screening");

const getScreenings = async (req, res) => {
  try {
    // .find() with movieId as filter parameter and all screenings regardless of date
    //let screenings = await Screening.find({ movieId: movieId }).exec();

    // Screenings from when the request is made and onwards
    const now = new Date();

    // let screenings = await Screening.find({ movieId: movieId }).where('startTime').gte(now).sort("startTime").exec();

    // Just changed the query to db to also populate movieId
    // let screenings = await Screening.find( movieId ).where('startTime').gte(now).sort("startTime").populate("movieId").exec();

    if (req.query.movieId === "undefined") {

      date = now.toLocaleDateString("sv-SV")

      const minStartTime = new Date(date + " 00:00");
      const maxStartTime = new Date(date + " 23:00");

      let screenings = await Screening.find({
        startTime: { $gte: minStartTime, $lte: maxStartTime },
      }).populate("movieId").exec();

      return res.json(screenings);

    } else {
      const movieId = req.query;
      console.log(movieId);
      let screenings = await Screening.find( movieId )
        .where("startTime")
        .gte(now)
        .sort("startTime")
        .populate("movieId")
        .exec();

        return res.json(screenings);
    }
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
};

module.exports = {
  getScreenings,
};
