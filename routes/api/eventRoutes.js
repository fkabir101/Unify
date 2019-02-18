const router = require("express").Router();
const eventController = require("../../controllers/eventController");
router.route("/getEvent/:queryType/:queryParam")
  .get(eventController.getEvent);

router.route("/goEvent/:id")
  .get(eventController.getEventPage)
  .put(eventController.update)
  .delete(eventController.deleteEvent);

router.route("/userEvent")
  .get(eventController.getEventByUser);
router.route("/userParticipate")
  .get(eventController.getParticipateByUser);

router.route("/leaveEvent/:eventId")
  .delete(eventController.leaveEvent);

router.route("/mainRecent")
  .get(eventController.getRecentlyMadeEvents);
module.exports = router;