//this creates the table for events
module.exports = function(sequelize, DataTypes) {
var Events = sequelize.define("Events", {
  eventName: {
    type: DataTypes.STRING,
   // allowNull: false,
    validate: {len: [1]}
  },
  eventDescription: {
    type: DataTypes.TEXT,
   // allowNull: false,
    validate: {len: [1, 500]}
  },
  eventLocation: {
    type: DataTypes.STRING,
   // allowNull: false,
    validate: {len: [1]}
  },
  eventTime: {
    type: DataTypes.STRING,
  //  allowNull: false,
    validate: {len: [1]}
  },
  maxLimit: {
    type: DataTypes.INTEGER,
   // allowNull: false,
    validate: {len: [1]}
  },
  category: {
    type: DataTypes.STRING,
  //  allowNull: false,
    validate: {len: [1]}
  },
  currentParticipants: {
    type: DataTypes.INTEGER,
   // allowNull: false,
    validate: {len: [1]}
  }
}, {
  freezeTableName: true
});

//associates the creation of an event with a user
Events.associate = function(models) {
  models.Events.belongsTo(models.Users, {
    onDelete: "CASCADE",
    foreignKey: {
      //allowNull: false
    }
  });
  
  models.Events.belongsToMany(models.Participants,
    {
      through: {
        model: models.switzerland
      }
    });
};

  return Events;
};