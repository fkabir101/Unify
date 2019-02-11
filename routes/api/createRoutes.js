const router = require("express").Router();
const createController = require("../../controllers/createController");
router.route("/create")
  .post(createController.addEvent);


  module.exports = router;