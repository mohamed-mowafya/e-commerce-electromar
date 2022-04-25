const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const helmet = require('helmet')
const sanitize = require('mongo-sanitize');
dotenv.config()

const authRoutes = require('./routes/userAuthRoutes')
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
  origin: "http://localhost:3000", 
  credentials: true,
}
))
app.use(cookieParser(process.env.SESS_SECRET));
app.use(helmet())
app.use(passport.initialize());
app.use(passport.session());
require("./controllers/passportConfig")(passport)



//-----------------ROUTES--------------------------------------------------------//
app.use('/',authRoutes)

//// -------------- END OF ROUTES------------------------------------------------//
app.listen(5000,()=>{
  console.log("Listening on port 5000")
})


module.exports = app;
