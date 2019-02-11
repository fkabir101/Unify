DROP DATABASE IF EXISTS unify_db;
CREATE DATABASE unify_db;
USE unify_db;

-- Table holding the user information
CREATE TABLE users (
  userId INTEGER(11) NOT NULL AUTO_INCREMENT,
  userName VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  isOrganizer BOOLEAN DEFAULT false,
  email VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

-- Table holding the event information
CREATE TABLE events (
  eventId INTEGER(11) NOT NULL AUTO_INCREMENT,
  creatorId INTEGER(11) NOT NULL, --this will be the userId of who created the event
  eventName VARCHAR(255) NOT NULL,
  eventLocation VARCHAR(255) NOT NULL,
  eventTime VARCHAR(255) NOT NULL,
  maxLimit  INTEGER(11) NOT NULL DEFAULT 99999999999, --this will set the default value to the highest value SQL can store if not specified
  category VARCHAR(255) NOT NULL,
  currPart INTEGER(11) NOT NULL DEFAULT 0
);

-- Table holding the partipants where eventKey=eventId and userKey=userID
CREATE TABLE participants (
  eventKey INTEGER(11) NOT NULL,
  userKey INTEGER(11) NOT NULL
);