const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//* Do no have an encryption method yet...
// const encrypt = require("../encrypt");

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: String,
  lastName: String,
  phoneNumber: Number, // Or should this property be String instead??
  reservations: [{ type: Schema.Types.ObjectId, ref: "Reservation" }],
});

//* When encryption of password is avaliable use this middleware to encrypt before saving to DB.
/* userSchema.pre("save", function (next) {
  this.password = encrypt(this.password);
  next();
}); */

const User = mongoose.model("User", userSchema);

module.exports = User;
