const User = require("../models/user");
const bcrypt = require("bcryptjs");

const updateProfile = async (req, res, next) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await User.findOneAndUpdate({email: req.body.email}, {password: hashedPassword})
    res.status(400).json({"status": "success"})
}

module.exports = {updateProfile};