const router = require("express").Router();
const userRoutes = require('./userRoutes');
//const apiRoutes = require("./apiRoutes");
const createRoutes = require("./createRoutes");
const eventRoutes = require("./eventRoutes");
const partRouts = require("./participantRouts");
const userInfo = require("./userInfoRoutes");

db = require("../../models");
//router.use("/", apiRoutes);
router.use('/users', userRoutes);
router.use("/userInfo", userInfo);

//module.exports = router;
router.use("/", createRoutes);
router.use("/event", eventRoutes);
router.use("/part", partRouts);

module.exports = router;
