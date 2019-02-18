const router = require("express").Router();
const partController = require("../../controllers/partController");

router
  .route("/")
  .post(partController.addParticipant);

router
  .route("/getParticipant/:userKey")
  .get(partController.getParticipant);


  module.exports = router;