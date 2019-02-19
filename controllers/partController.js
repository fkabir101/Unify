db = require("../models");
// use req.user.id to get user id and store in database
// const transport = require("../mailer/mail");
// var mailOptions = {
//   from: 'uni.fivs@gmail.com',
//   to: 'fkabir101@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };
// transport.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });
module.exports = {
  addParticipant: function (req, res) {
    db.Participants.create({
        eventKey: req.body.eventKey,
        userKey: req.user.id,
        EventId: req.body.eventKey,
        UserId: req.user.id,
      })
      .then(dbParticipant => {
        res.json(dbParticipant)

      }).catch(err => {
        console.log(err);
        res.json(err);
      })
  },
  getParticipant: function (req, res) {
    console.log("req.params " + req.params);
    db.Participants.findAll({
      where: {
        userKey: req.params.userKey
      }
    }).then(function (dbData) {
      res.json(dbData)
    })
  }

}