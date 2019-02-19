const router = require("express").Router();
const userRoutes = require('./userRoutes');
const createRoutes = require("./createRoutes");
const eventRoutes = require("./eventRoutes");
const partRouts = require("./participantRouts");
const userInfo = require("./userInfoRoutes");
const emailRoutes = require("./emailRoutes");

db = require("../../models");
router.use('/users', userRoutes);
router.use("/userInfo", userInfo);
router.use("/email", emailRoutes);
router.use("/", createRoutes);
router.use("/event", eventRoutes);
router.use("/part", partRouts);

module.exports = router;
