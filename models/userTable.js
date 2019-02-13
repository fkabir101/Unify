const bcryptjs = require('bcryptjs');

//this creates the table for users
module.exports = function(sequelize, DataTypes) {
var Users = sequelize.define("Users", {
  username: {
    type: DataTypes.STRING,
    //allowNull: false,
    validate: {len: [1]}
  },
  password: {
    type: DataTypes.STRING,
    //allowNull: false,
    validate: {len: [1]}
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {isEmail: true}
  }
}, {
  freezeTableName: true
});
//associates the user with an event
//if the user is deleted they will also be deleted from events
// Users.associate = function(models) {
//   Users.hasMany(models.Events);
// };

Users.prototype.validPassword = function (password) {
  return bcryptjs.compareSync(password, this.password);
};

// Hooks are automatic methods that run during various phases of the User Model lifecycle
// In this case, before a User is created, we will automatically hash their password
Users.hook("beforeCreate", function (user) {
  user.username = user.username.toLowerCase().replace(/\s/g, '');
  user.password = bcryptjs.hashSync(user.password, bcryptjs.genSaltSync(10), null);
  console.log(user);
});

Users.associate = function (models) {
  models.Users.hasMany(models.Events);
}

return Users;
};