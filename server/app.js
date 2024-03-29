const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const helmet = require("helmet");
dotenv.config();

const authRoutes = require("./routes/userAuthRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const fileRoutes = require("./routes/fileRoutes");
const stripeRoutes = require("./routes/stripeRoutes");
const orderRoutes = require("./routes/orderRoutes");
//---------------------------IMPORTS AND CONFIGS---------------------------------------------------------------------------//

mongoose
  .connect(process.env.MONGO_URI, {
    // Set to "mongodb://mongo:27017/ecom" for docker
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));
app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: null,
      httpOnly: true,
    },
  })
);
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(cookieParser(process.env.SESS_SECRET));
app.use(helmet());
app.use(passport.initialize());
app.use(passport.session());
require("./controllers/passportConfig")(passport);

//-----------------ROUTES--------------------------------------------------------//
app.use("/", authRoutes);
app.use("/", productRoutes);
app.use("/", cartRoutes);
app.use("/", fileRoutes);
app.use("/", stripeRoutes);
app.use("/", orderRoutes);

//// --------------ROUTES------------------------------------------------//
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

module.exports = app;
