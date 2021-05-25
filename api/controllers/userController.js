// Import Model
const User = require("../models/User");

// Import utils
const utilities = require("../utilities/utilities");

// POST - register a new user
const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Password validation - checks if password fulfills following requirements:
    // 8 characters, at least one uppercase letter, at least one lowercase letter, one number and one special character.
    if (!utilities.checkPassword(password)) {
      return res
        .status(400)
        .json({ status: "error", message: "User entered invalid password." });
    }

    // Email validation - checks if email is valid.
    if (!utilities.checkEmail(email)) {
      return res
        .status(400)
        .json({ status: "error", message: "User entered invalid email." });
    }

    // Checks if email is already registered in database.
    const emailExists = await User.exists({ email: email });

    // If email does not already exists in database, proceed to inserting user to database.
    if (!emailExists) {
      await User.create(req.body, function (err, result) {
        if (err) {
          return res.sendStatus(400);
        } else {
          res.status(201).json({
            status: "success",
            message: "Successfully created a new user.",
            data: result,
          });

          return;
        }
      });
    } else {
      res
        .status(409)
        .json({ status: "error", message: `User exists: ${emailExists}` });

      return;
    }
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });

    throw error;
  }
};

module.exports = { register };
