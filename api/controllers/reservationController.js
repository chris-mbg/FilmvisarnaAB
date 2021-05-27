const Reservation = require("../models/Reservation");
const Movie = require("../models/Movie");
const Screening = require("../models/Screening");

const createNewReservation = async (req, res) => {
  /*
    req.body = {
      screening: {
        screeningId: "ObjectId",
        startTime: "date and time"  ! Do not need this!
      }
      movieId: "ObjectId",
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
    let screening = await Screening.findById(
      req.body.screening.screeningId
    );
    // Movie information also needs to be saved with the reservation
    let movie = await Movie.findById(screening.movieId).exec();

    // ...and check that the seats that user tries to book is free
    // Which seats have the user picked? Are they already taken? If not taken --> set the seat to 1.
    for (let i = 0; i < req.body.tickets.length; i++) {
      if (
        screening.seats[req.body.tickets[i].seatNumber[0]][
          req.body.tickets[i].seatNumber[1]
        ] === 1
      ) {
        return res
          .status(400)
          .json({ status: "error", message: "Seat already reserved." });
        break;
      } else {
        console.log("on way to book seat.. Current value:", screening.seats[req.body.tickets[i].seatNumber[0]][
          req.body.tickets[i].seatNumber[1]
        ])
        screening.seats[req.body.tickets[i].seatNumber[0]][
          req.body.tickets[i].seatNumber[1]
        ] = 1;
        console.log("Booked seat.. Current value:", screening.seats[req.body.tickets[i].seatNumber[0]][
          req.body.tickets[i].seatNumber[1]
        ])
      }
    }
    console.log(screening.seats);

    // reserves the seats on the screening (is this the correct syntax??)
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
        auditoriumName: screening.auditoriumName
      },
      tickets: req.body.tickets,
      totalPrice: req.body.totalPrice,
      userId: req.session.user._id,
    });

    //! Add reservation to user!

    return res.json({ status: "success", reservation: reservation });
  } catch (error) {
    // If error occurs ie with id format..
    res.status(400).json({ status: "error", message: error.message });
  }
};

module.exports = {
  createNewReservation,
};
