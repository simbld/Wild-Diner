const express = require("express");

const router = express.Router();

const MealControllers = require("./controllers/MealControllers");
const UsersControllers = require("./controllers/UsersControllers");
const CommentsControllers = require("./controllers/CommentsControllers");

router.get("/meal", MealControllers.browse);
router.get("/meal/:id", MealControllers.read);
router.put("/meal/:id", MealControllers.edit);
router.post("/meal", MealControllers.add);
router.delete("/meal/:id", MealControllers.destroy);

router.get("/users", UsersControllers.browse);
router.get("/users/:id", UsersControllers.read);
router.put("/users/:id", UsersControllers.edit);
router.post("/users", UsersControllers.add);
router.delete("/users/:id", UsersControllers.destroy);

router.get("/comments", CommentsControllers.browse);
router.get("/comments/:id", CommentsControllers.read);
router.put("/comments/:id", CommentsControllers.edit);
router.post("/comments", CommentsControllers.add);
router.delete("/comments/:id", CommentsControllers.destroy);

module.exports = router;
