//this creates the table for events
var User = sequalize.define("events", {
  eventId: Sequelize.INTEGER,
  creatorId: Sequalize.INTEGER,
  eventName: Sequalize.STRING,
  eventLocation: Sequalize.STRING,
  eventTime: Sequalize.STRING,
  maxLimit: Sequalize.INTEGER,
  category: Sequalize.STRING,
  currentParticipants: Sequalize.INTEGER
}, {
  freezeTableName: true
});