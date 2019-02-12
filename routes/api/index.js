const router = require("express").Router();
//sconst apiRoutes = require("./apiRoutes");
const apiRoutes = require("./createRoutes");
db = require("../../models");
router.use("/", apiRoutes);

module.exports = router;

module.exports = function(app) {

app.post('/', function(req, res){
  var username = req.body.username;
  var password = req.body.password;
  authenticate(req, username, password);
  if (req.session && req.session.authenticated) {
  res.reder('welcome', {users: data2.users});
  } else {
  res.redirect('/');
  }
  })
  
  app.listen(3000,function(){
  console.log('Started express application!')
  });
}