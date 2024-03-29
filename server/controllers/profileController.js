const User = require("../models/user");
const passport = require("passport");
const bcrypt = require("bcryptjs");

const updateProfile = async (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err)
      return res
        .status(403)
        .json({ status: "An authentication error has occured." });
    else {
      req.logIn(user, async (err) => {
        if (err)
          return res
            .status(403)
            .json({ status: "The provided old password is wrong." });
        if (req.user.email !== req.body.email) {
          return res
            .status(400)
            .json({
              error:
                "The supplied email does not match the authenticated user.",
            });
        }
        const hashedPassword = await bcrypt.hash(req.body.newPassword, 10);
        await User.findOneAndUpdate(
          { email: req.body.email },
          { password: hashedPassword }
        );
        req.logout();
        return res.status(200).json({ status: "success" });
      });
    }
  })(req, res, next);
};

module.exports = { updateProfile };
