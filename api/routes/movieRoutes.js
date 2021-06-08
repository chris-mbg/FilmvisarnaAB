const express = require("express");
const router = express.Router();

const movieController = require("../controllers/movieController");

// router.get("/", movieController.getAllMovies);
router.get("/:movieId", movieController.getMovieById);

router.get("", movieController.getFilteredMovies);
module.exports = router;
