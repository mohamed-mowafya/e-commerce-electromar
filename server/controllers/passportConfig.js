const User = require("../models/user");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  passport.use(
    new localStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (username, password, done) => {
        try {
          const user = await User.findOne({ email: username });
          if (!user) return done(null, false);
          bcrypt.compare(password, user.password, (err, result) => {
            if (err) throw err;
            if (result === true) {
              return done(null, user);
            } else {
              return done(null, false);
            }
          });
        } catch (err) {
          throw err;
        }
      }
    )
  );

  passport.serializeUser((user, cb) => {
    cb(null, user._id);
  });
  passport.deserializeUser(async (id, cb) => {
    try {
      const user = await User.findOne({ _id: id });
      const userInformation = {
        email: user.email,
        id: user.id,
      };
      cb(null, userInformation);
    } catch (err) {
      cb(err);
    }
  });
};
