db = require("../models");

//if need more functions look at userController.js in express-passport-demo
module.exports = {
  addUser: function(req, res){
    db.Users.create(req.body).then(function(dbPost) {
      res.json("/");
    });
  },
  findAll: function(req, res) {
    db
      .Users
      .findAll({
        attributes: ["username", "password", "email"]
      })
      .then(dbUsers => res.json(dbUsers))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  login: function(req, res) {
    console.log(req.user);
    res.json("/");
  },
  update: function (req, res) {
    db
      .Users
      .update(req.body, {
        where: {
          username: req.params.username
        }
      })
      .then(dbUsers => res.json(dbUsers))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  delete: function (req, res) {
    db
      .Users
      .destroy({
        where: {
          username: req.params.username
        }
      })
      .then(dbUsers => res.json(dbUsers))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  findByName: function (req, res) {
    db
      .Users
      .findOne({
        attributes: ["id", "first_name", "last_name", "full_name", "user_name"],
        where: {
          username: req.params.username
        },
        include: [db.Posts]
      })
      .then(dbUsers => res.json(dbUsers))
      .catch(err => {
        console.log(err);
        res.status(404).json(err);
      });
  }
}