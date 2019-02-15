const router = require("express").Router();
const eventController = require("../../controllers/eventController");
router.route("/getEvent/:queryType/:queryParam")
  .get(eventController.getEvent);

router.route("/goEvent/:id")
  .get(eventController.getEventPage)
  .put(eventController.update)
router.route("/userEvent")
  .get(eventController.getEventByUser)
module.exports = router;