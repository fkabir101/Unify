const router = require("express").Router();
const emailController = require("../../controllers/emailController");
router.route("/")
  .post(emailController.sendEmails);


  module.exports = router;