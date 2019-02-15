db = require("../models");
// use req.user.id to get user id and store in database
module.exports = {
  addParticipant : function(req, res){
    db.Participants.create({
      eventKey: req.body.eventKey,
      userKey: req.user.id,
      EventId: req.body.eventKey
    })
    .then(dbParticipant => res.json(dbParticipant))
    .catch(err => {
      console.log(err);
      res.json(err);
    })
  },
  getParticipant: function (req, res) {
    console.log("req.params " + req.params);
      db.Participants.findAll({
        where: {
          userKey: req.params.queryParam
        }
      }).then(function (dbData) {
        res.json(dbData)
      })
    }
  
}