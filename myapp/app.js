const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();
const User = require("./models/user");
const path = require('path');
const dotenv = require('dotenv');
const helmet = require('helmet')
var sanitize = require('mongo-sanitize');
dotenv.config()
//---------------------------IMPORTS AND CONFIGS---------------------------------------------------------------------------//

mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Mongoose Is Connected");
  }
);



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));
app.use(session({
  secret:process.env.SESS_SECRET,
  resave: true,
  saveUninitialized: true
}))
app.use(cors({
  origin: "http://localhost:3000", // <-- location of the react app were connecting to
  credentials: true,
}
))
app.use(cookieParser(process.env.SESS_SECRET));
app.use(helmet())
app.use(passport.initialize());
app.use(passport.session());
require("./controllers/passportConfig")(passport)




//-----------------ROUTES--------------------------------------------------------//

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("Auth error");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
});


app.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        email: req.body.email,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("User Created");
    }
  });
});

app.get("/user", (req, res) => {
  res.send(req.user); 
});


//// -------------- END OF ROUTES------------------///
app.listen(5000,()=>{
  console.log("Listening on port 5000")
})


module.exports = app;
