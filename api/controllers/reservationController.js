const Reservation = require("../models/Reservation");
const Movie = require("../models/Movie");
const Screening = require("../models/Screening");
const User = require("../models/User");

const getReservationsForUser = async (req, res) => {
  if(!req.session.user) {
    return res.status(401).json({status: "error", message: "No user logged in"});
  }
  try {
    let reservations = await Reservation.find({userId: req.session.user._id});
    return res.json(reservations);
  } catch (error) {
    res.status(400).json({status: "error", message: error.message});
  }
}

const createNewReservation = async (req, res) => {
  /*
    req.body = {
      screeningId: "ObjectId",
      tickets: [{
        ticketType: "adult",
        seatNumber: [y,x]
      }]
      totalPrice: Number,
    }
  */

  // Check if user logged in
  if (!req.session.user) {
    return res
      .status(401)
      .json({ status: "error", message: "No user logged in" });
  }

  try {
    // get screening by id
    let screening = await Screening.findById(req.body.screeningId);
    // Movie information also needs to be saved with the reservation
    // Gets movieId from screening.
    let movie = await Movie.findById(screening.movieId).exec();

    // Checks that the seats that user tries to book is free. (finds the right seat in screening.seats by using the seatNumber in tickets)
    //If not taken --> change the value to 1.
    for (let i = 0; i < req.body.tickets.length; i++) {
      if (
        screening.seats[req.body.tickets[i].seatNumber[0]][
          req.body.tickets[i].seatNumber[1]
        ] === 1
      ) {
        return res
          .status(400)
          .json({ status: "error", message: "Seat already reserved." });
      } else {
        screening.seats[req.body.tickets[i].seatNumber[0]][
          req.body.tickets[i].seatNumber[1]
        ] = 1;
      }
    }

    // reserves the seats on the screening. Need to use .markModified() or else is no changed detected by mongoose and the screening not saved.
    screening.markModified("seats");
    await screening.save();

    // Save the reservation to the DB
    let reservation = await Reservation.create({
      movie: {
        movieId: movie._id,
        title: movie.title,
        image: movie.image,
        length: movie.length,
        genre: movie.genre,
      },
      screening: {
        screeningId: screening._id,
        startTime: screening.startTime,
        auditoriumName: screening.auditoriumName,
      },
      tickets: req.body.tickets,
      totalPrice: req.body.totalPrice,
      userId: req.session.user._id,
    });

    return res.json({ status: "success", reservation: reservation });
  } catch (error) {
    // If error occurs ie with id format
    res.status(400).json({ status: "error", message: error.message });
  }
};

module.exports = {
  getReservationsForUser,
  createNewReservation,
};
