const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const categoryController = require("../controllers/category.controller");
const auth = require("../Middlewares/auth");

router.get("/", categoryController.getCategories);
router.get("/:id", categoryController.getCategory);
router.post(
  "/add",
  [auth],
  [check("name").not().isEmpty()],
  categoryController.addCategory
);
router.post(
  "/update/:id",
  [auth],
  [check("name").not().isEmpty()],
  categoryController.updateCategory
);

module.exports = router;
