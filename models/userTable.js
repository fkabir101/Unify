//this creates the table for users
var User = sequalize.define("users", {
  userId: Sequelize.INTEGER,
  userName: Sequalize.STRING,
  passowrd: Sequalize.STRING,
  isOrganizer: Sequalize.BOOLEAN,
  email: Sequalize.STRING
}, {
  freezeTableName: true
});