const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const encrypt = require("../encrypt");

const userSchema = new Schema({
  // email: { type: String, required: true },
  // password: { type: String, required: true },
  // name: {
  //   firstName: String,
  //   lastName: String,
  // },
  // address: {
  //   street: String,
  //   streetNumber: String,
  //   zipCode: String,
  //   city: String,
  //   state: String,
  //   country: String
  // },
  // role: { type: String, default: "ANON" },
  // wishlists: [{type: Schema.Types.ObjectId, ref: "Wishlist"}]
});

userSchema.pre("save", function (next) {
  this.password = encrypt(this.password);
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;