//this creates the table for events
module.exports = function(sequelize, DataTypes) {
var Events = sequelize.define("Events", {
  creatorId: {
    type: DataTypes.INTEGER,
    //allowNull: false,
    validate: {len: [1]}
  },
  eventName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {len: [1]}
  },
  eventDescription: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {len: [1, 500]}
  },
  eventLocation: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {len: [1]}
  },
  eventTime: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {len: [1]}
  },
  maxLimit: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {len: [1]}
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {len: [1]}
  },
  currentParticipants: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {len: [1]}
  }
}, {
  freezeTableName: true
});

//associates the creation of an event with a user
Events.associate = function(models) {
  Events.belongsTo(models.Users, {
    foreignKey: {
      //allowNull: false
    }
  });
};

  return Events;
};