//this creates the table for events
module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD
var User = sequelize.define("events", {
  eventId: Sequelize.INTEGER,
  creatorId: Sequelize.INTEGER,
  eventName: Sequelize.STRING,
  eventLocation: Sequelize.STRING,
  eventTime: Sequelize.STRING,
  maxLimit: Sequelize.INTEGER,
  category: Sequelize.STRING,
  currentParticipants: Sequelize.INTEGER
=======
var Events = sequelize.define("Events", {
  creatorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
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
>>>>>>> d982bb5022df08a86ca93849af9fb5a335c5a6d0
}, {
  freezeTableName: true
});

<<<<<<< HEAD
return User;
}
=======
//associates the creation of an event with a user
Events.associate = function(models) {
  Events.belongsTo(models.Users, {
    foreignKey: {
      allowNull: false
    }
  });
};

  return Events;
};
>>>>>>> d982bb5022df08a86ca93849af9fb5a335c5a6d0
