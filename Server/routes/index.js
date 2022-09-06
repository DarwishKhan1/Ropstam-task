const express = require("express");
const router = express.Router();
const userRoutes = require("./user.routes");
const categoryRoutes = require("./category.routes");
const carRoutes = require("./car.routes");

router.use("/user", userRoutes);
router.use("/category", categoryRoutes);
router.use("/car", carRoutes);

module.exports = router;