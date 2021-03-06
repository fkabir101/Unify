const express = require("express");
const session = require('express-session');
const passport = require('./config/middleware/passport-local');
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

