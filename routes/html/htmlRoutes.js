const router = require("express").Router();
var path = require("path");

router.route("/").get(function(req, res) {
  res.sendFile(path.join(__dirname, "../../public/mainpage.html"));
});

//conflict resolved this was changed from index.html to login.html
router.route("/login").get(function(req, res) {
  res.sendFile(path.join(__dirname, "../../public/login.html"));

});
router.route("/create").get(function(req, res) {
  res.sendFile(path.join(__dirname, "../../public/create.html"));
});
router.route("/signup").get(function(req, res) {
  res.sendFile(path.join(__dirname, "../../public/signup.html"));
});
router.route("/events").get(function(req, res) {
  res.sendFile(path.join(__dirname, "../../public/events.html"));
});


module.exports = router;
