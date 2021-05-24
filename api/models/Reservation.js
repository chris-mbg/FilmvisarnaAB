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
  tickets: [{ ticketType: String, seatNumber: [Number] }], 
  // seatNumber: [1,11]
  /* tickets: [
    {
      ticketType: "adult",
      seatNumber: [1,2]
    },
    {
      ticketType: "child",
      seatNumber: [1,3]
    }
  ] */
  totalPrice: Number,
  screeningId: { type: Schema.Types.ObjectId, ref: "Screening" },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
});

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
