const passport = require("passport");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

const login = (req,res,next) =>{
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) res.status(403).json({"status": "fail"});
        else {
          req.logIn(user, (err) => {
            if (err) throw err;
            res.json({"status": "success"});
            console.log(req.user);
          });
        }
      })(req, res, next);
}

const signUp = (req,res,next) =>{
    User.findOne({ email: req.body.email }, async (err, doc) => {
        if (err) throw err;
        if (doc) res.status(400).json({"status": "User already exists."});
        if (!doc) {
          const hashedPassword = await bcrypt.hash(req.body.password, 10);
    
          const newUser = new User({
            email: req.body.email,
            password: hashedPassword,
            admin: req.body.admin
          });
          await newUser.save();
          res.send("User Created");
        }
      });
}

const checkAuth = (req,res,next) =>{
    if(req.isAuthenticated()){
        res.send("User is authenticated");
    }
    else{
        res.send("Auth error");
    }
}

module.exports = {login,signUp,checkAuth}