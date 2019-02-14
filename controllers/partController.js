db = require("../models");
// use req.user.id to get user id and store in database
module.exports = {
  addParticipant : function(req, res){
    db.Events.create(req.body).then(function(dbPost) {
      res.json({success: true});
    });
  },
  
}