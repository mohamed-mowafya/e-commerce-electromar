const passport = require("passport");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

const login = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) {
      res.status(403).json({ status: "unauthorized" });
    } else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.status(200).json({ status: "success", userId: req.user.id });
      });
    }
  })(req, res, next);
};

const signUp = async (req, res, next) => {
  try {
    const doc = await User.findOne({ email: req.body.email });
    if (doc) {
      return res.status(400).json({ status: "User already exists." });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      email: req.body.email,
      password: hashedPassword,
      admin: false,
    });
    await newUser.save();
    res.status(200).json({ status: "success" });
  } catch (err) {
    next(err);
  }
};

const logOut = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.status(200).json({ status: "success" });
  });
};

const checkAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    res.status(200).json({ status: "authenticated", email: req.user.email });
    next();
  } else {
    res.status(400).json({ status: "not authenticated" });
  }
};

module.exports = { login, signUp, checkAuth, logOut };
