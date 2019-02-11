//this creates the table for users
var User = sequalize.define("participants", {
  eventKey: Sequelize.INTEGER,
  userKey: Sequalize.INTEGER
}, {
  freezeTableName: true
});