const transport = require('../mailer/mail');

module.exports = {
  sendEmails: function(req, res){
    console.log(req.body);
    req.body.emails.forEach(email => {
      var mailOptions = {
        from: 'uni.fivs@gmail.com',
        to: email,
        subject: 'An Event has been Updated',
        text: `${req.body.event} has been updated by the organizer`
      };
      transport.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    });
    res.json((req.body));
  }
}