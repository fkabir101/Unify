const router = require("express").Router();
const partController = require("../../controllers/partController");

router
  .route("/")
  .post(partController.addParticipant);


  module.exports = router;