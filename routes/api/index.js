const router = require("express").Router();
const Routes = require("./authRoutes");
const appRoutes = require("./appRoutes")
// Book routes

router.use("/authRoutes", Routes);
router.use("/appRoutes", appRoutes);

module.exports = router;