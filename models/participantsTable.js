//this creates the table for users
module.exports = function (sequelize, DataTypes) {
  var Participants = sequelize.define("Participants", {
    eventKey: {
      type: DataTypes.INTEGER,
      //allowNull: false
    },
    userKey: {
      type: DataTypes.INTEGER,
      //allowNull: false
    }
  }, {
    freezeTableName: true
  });

  //this is supposed to associate the users in an event with a corresponding event
  Participants.associate = function (models) {
    models.Users.belongToMany(models.Events,
      {
        through: {
          model: models.Switzerland
        }
    });
   }

  return Participants;
}; //module exports