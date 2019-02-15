db = require("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
  getEvent: function (req, res) {
    console.log(req.params);
    if (req.params.queryType === "eventLocation") {
      db.Events.findAll({
        where: {
          eventLocation: req.params.queryParam
        }
      }).then(function (dbData) {
        res.json(dbData)
      })
    } else if (req.params.queryType === "category") {
      db.Events.findAll({
        where: {
          category: req.params.queryParam
        }
      }).then(function (dbData) {
        res.json(dbData)
      })
    } else {
      db.Events.findAll({
        where: {
          eventName: {
            [Op.like]: `%${req.params.queryParam}%`
          }
        }
      }).then(function (dbData) {
        res.json(dbData)
      });
    }
  },
  getEventPage: function(req, res){
    db.Events.findOne({
      where: {
        id : req.params.id
      },
      include : [db.Users]
    }).then(function(dbData){
      res.json(dbData);
    });
  },
  update: function (req, res) {
    db
      .Events
      .update({
        currentParticipants: Sequelize.literal("currentParticipants + 1")
      }, {
        where: {
          id: req.params.id
        }
      })
      .then(dbData => res.json(dbData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
    },
    getEventByUser : function(req, res){
      db.Events.findAll({
        where:{
          UserId: String(req.user.id)
        }
      }).then(function(dbData){
        res.json(dbData);
      })
    }
}