var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var sanitize = require('mongo-sanitize');
var User = require('./models/user')

var app = express();
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const dotenv = require('dotenv');
const helmet = require('helmet')
const session = require('express-session')
const localStrategy = require('passport-local').Strategy // Auth strategy.
const bcrypt = require('bcrypt')

dotenv.config()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));
app.use(session({
  secret:process.env.SESS_SECRET,
  resave: false,
  saveUninitialized: true
}))

app.use(helmet())
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);


passport.serializeUser(function (user,done){
  done(null, user.id)
});

passport.deserializeUser((id,done)=>{
  User.findById(id, (err,user) =>{
    done(err,user)
  })
});

passport.use(new localStrategy((email,password,done)=>{
  User.findOne({email:email}, (err,user)=>{
    if(err) return done(err);
    if(!user){
      return done(null,false,{message: 'Incorrect Username'})
    }

    bcrypt.compare(password,user.password,(err,res)=>{
      if(err){
        return done(error)
      }
      if(res === false){
        return done(null,false,{message:'Incorrect Pasword'})
      }
      return done(null,user)
    })
  })
}))

// Setup admin user
app.post('/register', async (req, res) => {
	const exists = await User.exists({ email: req.body.email });


	bcrypt.genSalt(10, function (err, salt) {
		if (err) return next(err);
		bcrypt.hash(req.body.pass, salt, function (err, hash) {
			if (err) return next(err);
			
			const newUser = new User({
				email: req.body.email,
				password: hash
			});

			newUser.save();

		});
	});
  res.send(JSON.stringify({message:"User Registered"}))
});

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.redirect('/login');
}

function isLoggedOut(req, res, next) {
	if (!req.isAuthenticated()) return next();
	res.redirect('/');
}



app.listen(3000,()=>{
  console.log("Listening on port 3000")
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




mongoose.connect(process.env.MONGO_URI)
   .then(() =>  console.log('db connection successful'))
   .catch((err) => console.error(err));




module.exports = app;
