// Import Model
const User = require("../models/User");

// Import utils
const utilities = require("../utilities/utilities");
const Encrypt = require("../utilities/encrypt");

// GET - check if anyone is logged in
const whoami = (req, res) => {
  return res.json(req.session.user || null);
};

// GET - log the user out.
const logout = async (req, res) => {
  try {
    // Logs the user out by deleting "req.session.user".
    delete req.session.user;

    // If successful, return status code: 200
    res.status(200).end();
  } catch (error) {
    // If unsuccessful, return status code: 500
    res.status(500).end();
  }
};

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
          // "Logs" user in after successful registration.
          req.session.user = result;

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

// POST log in
const login = async (req, res) => {
  // model.exist  return true if user exist
  let userExist = await User.exists({ email: req.body.email });

  if (userExist) {
    // findOne() return first matching (Query object)
    let user = await User.findOne({ email: req.body.email }).exec();

    // get encrypted password
    req.body.password = Encrypt(req.body.password);
    if (user.password === req.body.password) {
      // connect to app.use(session) in index.js
      req.session.user = user;
      req.session.user.password = undefined;
      req.password = undefined;
      return res.json({
        status: "success",
        message: "login successful",
        loggedInUser: user,
      });
    }
  }

  return res.status(401).json({ status: "error", message: "Bad credentials" });
};

// PUT - update a user - /:userId
const userUpdate = async (req, res) => {
  // Checks if user is logged in - if not logged in then return error object.
  if (!req.session.user) {
    return res
      .status(401)
      .json({ status: "error", message: "No user logged in" });
  }

  try {
    // Checks for two conditions:
    // 1. Checks if there is a req.body.password.
    // 2. If req.body.password is not undefined - then also check if the password matches the following requirements:
    // 8 characters, at least one uppercase letter, at least one lowercase letter, one number and one special character.
    if (
      req.body.password !== undefined &&
      !utilities.checkPassword(req.body.password)
    ) {
      return res
        .status(400)
        .json({ status: "error", message: "User entered invalid password." });
    }

    // If req.body.password is NOT undefined - then encrypt password.
    if (req.body.password !== undefined) {
      req.body.password = Encrypt(req.body.password);
    }

    // Checks for two conditions:
    // 1. Checks if there is a req.body.email
    // 2. Email validation - checks if email is valid.
    if (req.body.email !== undefined && !utilities.checkEmail(req.body.email)) {
      return res
        .status(400)
        .json({ status: "error", message: "User entered invalid email." });
    }

    // Checks if e-mail is already registered in database.
    const emailExists = await User.exists({ email: req.body.email });

    // If email does NOT already exists in database or if req.body.email is not undefined - then proceed to updating user's information.
    if (!emailExists || req.body.email !== undefined) {
      await User.findByIdAndUpdate(req.params.userId, req.body, {
        new: true,
      }).exec(function (error, result) {
        // If user does not exists in database, return status code: 404
        if (error) {
          return res.sendStatus(404);
        } else {
          // Sets password to: "undefined" - inside "result" object after successful update.
          result.password = undefined;

          // Sets req.session.user to current updated user.
          req.session.user = result;

          return res.status(200).json({
            status: "success",
            message: "Successfully updated user.",
            data: result,
          });
        }
      });
    } else {
      return res.status(409).json({
        status: "success",
        message: `User already exists: ${emailExists}`,
      });
    }
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });

    throw error;
  }
};

module.exports = {
  whoami,
  register,
  login,
  logout,
  userUpdate,
};
