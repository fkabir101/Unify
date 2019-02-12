db = require("../models");

module.exports = {
  addUser: function(req, res){
    db.User.create(req.body).then(function(dbPost) {
      res.json({success: true});
    });
  }
}