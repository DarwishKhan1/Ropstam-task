const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const carController = require("../controllers/car.controller");
const auth = require("../Middlewares/auth");

router.get("/", carController.getCars);
router.post(
  "/add",
  [auth],
  [
    check("name").not().isEmpty(),
    check("categoryId").not().isEmpty(),
    check("color").not().isEmpty(),
    check("model").not().isEmpty(),
    check("make").not().isEmpty(),
    check("registrationNo").not().isEmpty(),
  ],
  carController.createCar
);
router.post(
  "/update/:id",
  [auth],
  [
    check("name").not().isEmpty(),
    check("categoryId").not().isEmpty(),
    check("color").not().isEmpty(),
    check("model").not().isEmpty(),
    check("make").not().isEmpty(),
    check("registrationNo").not().isEmpty(),
  ],
  carController.updaeCar
);

module.exports = router;
