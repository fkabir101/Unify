db = require("../models");

module.exports = {
  addEvent : function(req, res){
    db.Events.create(req.body).then(function(dbPost) {
      res.json({success: true});
    });
  }
}