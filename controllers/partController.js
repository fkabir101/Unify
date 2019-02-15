db = require("../models");
// use req.user.id to get user id and store in database
module.exports = {
  addParticipant : function(req, res){
    db.Participants.create({
      eventKey: req.body.eventKey,
      userKey: req.user.id
    })
    .then(dbParticipant => res.json(dbParticipant))
    .catch(err => {
      console.log(err);
      res.json(err);
    })
  },
  
}