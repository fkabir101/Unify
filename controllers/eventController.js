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
      .then(dbData =>   db.Events.findOne({
        where: {
          id : req.params.id
        }
      }).then(function(dbData){
        res.json(dbData);
      }))
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
    },
    getParticipateByUser: function(req,res){
      db.Participants.findAll({
        where:{
          userKey: String(req.user.id)
        },
        include : [db.Events]
      }).then(function(dbData){
        res.json(dbData);
      })
    },
    getRecentlyMadeEvents : function(req, res){
      db.Events.findAll({
        limit : 5,
        include : [db.Users],
        order : [
          ['createdAt' , 'DESC']
        ]
      }).then(function(dbData){
        res.json(dbData);
      })
    },

    //Delete Event from event table
    deleteEvent: function(req, res){
      db.Events.destroy({
        where:{
          id : req.params.id 
        }
      }).then(function(dbData){
        res.json({success:true});
      })
    },
    //leave event function and update Prticipants table and subtract one from the events table
    leaveEvent: function(req, res){
      db.Participants.destroy({
        where:{
          userKey : String(req.user.id),
          EventId : req.params.eventId
        }
      }).then(function(deleteData){
        db.Events.findOne({
          where:{
            id : req.params.eventId
          }
        }).then(function(dbData){
          let newPatricipant = parseInt(dbData.currentParticipants) - 1
          update ={
            currentParticipants : newPatricipant
          } 
          db.Events.update(update, {
            where:{
              id : req.params.eventId
            }
          }).then(function(updateData){
            res.json({success:true});
          })
        })
      })
    },
    eventUpdate : function(req, res){
      db.Events.update(req.body, {
        where:{
          id : req.params.id
        }
      }).then(function(updateData){
        res.json({success:true});
      })
    }
}
