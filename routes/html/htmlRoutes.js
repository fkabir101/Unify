
var path = require("path");



module.exports = function(app) {

 

  // login route loads login.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // index route loads the index.html page,
 
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // create route loads the create.html page,
  
  app.get("/create", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/create.html"));
  });

  // signup route loads the signup.html page,
  
  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  // events route loads the events.html page,
  //where user will view listed events
  app.get("/events", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/events.html"));
  });
};
