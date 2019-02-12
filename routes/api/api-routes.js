var Events = require("../models/eventsTable.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/api/all", function(req, res) {

    // Finding all events, and then returning them to the user as JSON.
    Events.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });
};
