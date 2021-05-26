const express = require("express");
const router = express.Router();

const reservationController = require("../controllers/reservationController");

router.get("/user", reservationController.getReservationsForUser);


module.exports = router;
