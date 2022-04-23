var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors")
var passport = require('passport')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var sanitize = require('mongo-sanitize');
var User = require('./models/user')
const bodyParser = require("body-parser")

var app = express();
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const dotenv = require('dotenv');
const helmet = require('helmet')
const session = require('express-session')
const localStrategy = require('passport-local').Strategy // Auth strategy.
const bcrypt = require('bcryptjs')
dotenv.config()
//---------------------------IMPORTS AND CONFIGS---------------------------------------------------------------------------//

mongoose.connect(process.env.MONGO_URI)
   .then(() =>  console.log('db connection successful'))
   .catch((err) => console.error(err));


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));
app.use(session({
  secret:process.env.SESS_SECRET,
  resave: true,
  saveUninitialized: true
}))
app.use(cors({
  origin:"http://localhost:3000",
  credentials:true
}))
app.use(cookieParser(process.env.SESS_SECRET));
app.use(helmet())
app.use(passport.initialize());
app.use(passport.session());
require("./controllers/passportConfig")(passport)


//---------------------------------------MIDDLEWARES----------------------------//
app.use('/', indexRouter);
app.use('/users', usersRouter);


// Routes
app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
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
    if (doc) res.send("User Already Exists");``
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password,10); // Bcrypt has with salt

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
app.listen(3000,()=>{
  console.log("Listening on port 3000")
})


module.exports = app;
