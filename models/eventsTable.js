//this creates the table for events
module.exports = function(sequelize, DataTypes) {
var User = sequelize.define("events", {
  eventId: Sequelize.INTEGER,
  creatorId: Sequelize.INTEGER,
  eventName: Sequelize.STRING,
  eventLocation: Sequelize.STRING,
  eventTime: Sequelize.STRING,
  maxLimit: Sequelize.INTEGER,
  category: Sequelize.STRING,
  currentParticipants: Sequelize.INTEGER
}, {
  freezeTableName: true
});

return User;
}