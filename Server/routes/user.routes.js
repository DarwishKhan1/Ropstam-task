const express = require("express");
const router = express.Router();
const User = require("../models/user");
const userController = require("../controllers/user.controller");
const { check } = require("express-validator");

router.post(
  "/login",
  [check("email").not().isEmpty(), check("password").not().isEmpty()],
  userController.loginUserWithEmail
);

router.post(
  "/register",
  [
    check("fullName").not().isEmpty(),
    check("email", "email is not valid")
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject(
              "E-Mail exists already, please pick a different one."
            );
          }
        });
      })
      .isEmail()
      .normalizeEmail(),
    check("gender").not().isEmpty(),
    check("password").not().isEmpty(),
  ],
  userController.registerUser
);

router.post(
  "/update/:id",
  [check("fullName").not().isEmpty()],
  userController.updateUser
);

module.exports = router;
