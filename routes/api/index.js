const router = require("express").Router();
//sconst apiRoutes = require("./apiRoutes");
const apiRoutes = require("./createRoutes");

router.use("/", apiRoutes);

module.exports = router;