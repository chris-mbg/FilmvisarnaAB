const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  actors: [{ type: String }],
  ageLimit: Number,
  description: String,
  director: String,
  genre: String,
  image: String,
  language: String,
  length: String, // Or should it be Number? Info from OMDB is ie Runtime: "155 Min"
  productionCountries: [{type: String}],
  productionYear: Number,
  title: String,
  youtubeTrailer: String,
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
