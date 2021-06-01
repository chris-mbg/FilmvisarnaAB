const express = require("express");
const router = express.Router();

// Import controller
const screeningController = require("../controllers/screeningController");

router.get("/:movieId", screeningController.getScreeningsByMovieId);
router.get('/:screeningId', screeningController.getScreeningById)

module.exports = router;
