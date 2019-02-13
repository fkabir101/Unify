const router = require("express").Router();
const userRoutes = require('./userRoutes');
//sconst apiRoutes = require("./apiRoutes");
const apiRoutes = require("./createRoutes");
db = require("../../models");
router.use("/", apiRoutes);
router.use('/users', userRoutes);

module.exports = router;