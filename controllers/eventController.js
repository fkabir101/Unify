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
      }
    }).then(function(dbData){
      res.json(dbData);
    });
  }
}