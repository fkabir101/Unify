const router = require("express").Router();
//const apiRoutes = require("./apiRoutes");
const createRoutes = require("./createRoutes");
const eventRoutes = require("./eventRoutes");
db = require("../../models");
router.use("/", createRoutes);
router.use("/event", eventRoutes);

module.exports = router;

// module.exports = function(app) {

// app.post('/', function(req, res){
//   var username = req.body.username;
//   var password = req.body.password;
//   authenticate(req, username, password);
//   if (req.session && req.session.authenticated) {
//   res.reder('welcome', {users: data2.users});
//   } else {
//   res.redirect('/');
//   }
//   })
  
//   app.listen(3000,function(){
//   console.log('Started express application!')
//   });
// }