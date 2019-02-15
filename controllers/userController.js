db = require("../models");
module.exports = {
  findById: function(req, res){
    db.Users
      .findOne({
        where: {
          id : String(req.user.id)
        }
      }).then(function(dbData){
        res.json(dbData);
      })
  }
}