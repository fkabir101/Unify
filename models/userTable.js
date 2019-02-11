//this creates the table for users
module.exports = function(sequelize, DataTypes) {
var Users = sequelize.define("Users", {
  userName: {
    type: DataTypes.STRING,
    //allowNull: false,
    validate: {len: [1]}
  },
  password: {
    type: DataTypes.STRING,
    //allowNull: false,
    validate: {len: [1]}
  },
  isOrganizer: {
    type: DataTypes.BOOLEAN,
    //allowNull: false,
    validate: {len: [1]}
  },
  email: {
    type: DataTypes.STRING,
    //allowNull: false,
    validate: {len: [1]}
  }
}, {
  freezeTableName: true
});
//associates the user with an event
//if the user is deleted they will also be deleted from events
Users.associate = function(models) {
  Users.hasMany(models.Events, {
    onDelete: "cascade"
  });
};

return Users;
};
