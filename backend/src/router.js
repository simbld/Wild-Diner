const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const MealControllers = require("./controllers/mealControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/meals", MealControllers.browse);
router.get("/meals/:id", MealControllers.read);
router.put("/meals/:id", MealControllers.edit);
router.post("/meals", MealControllers.add);
router.delete("/meals/:id", MealControllers.destroy);

module.exports = router;
