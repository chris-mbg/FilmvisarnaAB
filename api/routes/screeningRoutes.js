const express = require("express");
const router = express.Router();

// Import controller
const screeningController = require("../controllers/screeningController");

router.get("/", screeningController.getScreenings);

module.exports = router;
