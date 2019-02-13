const router = require("express").Router();
const eventController = require("../../controllers/eventController");
router.route("/getEvent/:queryType/:queryParam")
  .get(eventController.getEvent);
module.exports = router;