const express = require("express");
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const expressValidator = require('express-validator');

//Authentication packages
const session = require('express-session')
const passport = require('passport');

const PORT = process.env.PORT || 3001;
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  name: "howdy",
  cookie: { 
    secure: false,
    sameSite: true,
    domain: "*.localhost"
  }
}));
// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(cookieParser());

// // Serve up static assets
app.use(express.static("client/build"));

app.use(passport.initialize());
app.use(passport.session());

// // Add routes, both API and view
app.use(routes);
// // Set up promises with mongoose
mongoose.Promise = global.Promise;
// // Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mymovielist";

mongoose.connect(MONGODB_URI);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});