db = require("../models");
// use req.user.id to get user id and store in database
module.exports = {
  addEvent : function(req, res){
    req.body.UserId = req.user.id 
    // console.log(req.body);
    req.body.UserId = req.user.id;
    db.Events.create(req.body).then(function(dbPost) {
      res.json({success: true});
    });
    // res.json({success: true});
  }
}