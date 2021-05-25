const express = require("express");
const router = express.Router();

// Import controller
const userController = require("../controllers/userController");

/* Register a new user */
router.post("/register", userController.register);
router.post("/login", userController.login);

module.exports = router;
