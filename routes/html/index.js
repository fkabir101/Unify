const router = require("express").Router();
const tableHTMLRoutes = require("./htmlRoutes");

router.use("/", tableHTMLRoutes);

module.exports = router;