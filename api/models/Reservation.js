const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  movie: {
    movieId: { type: Schema.Types.ObjectId, ref: "Movie" },
    title: String,
    image: String,
    length: String,
    genre: String,
  },
  tickets: [{ ticketType: String, seatNumber: [{ type: Number }] }],   // Check if correct formatted!!
  totalPrice: Number,
  screeningId: { type: Schema.Types.ObjectId, ref: "Screening" },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
});

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
