const Reservation = require("../models/Reservation");

const getReservationsForUser = async (req, res) => {
  if(!req.session.user) {
    return res.status(401).json({status: "error", message: "No user logged in"});
  }
  try {
    let reservations = await Reservation.find({userId: req.session.user._id});
    console.log(reservations);
    return res.json(reservations);
  } catch (error) {
    res.status(400).json({status: "error", message: error.message});
  }
}

module.exports = {
  getReservationsForUser
};
