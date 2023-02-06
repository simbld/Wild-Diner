const express = require("express");

const router = express.Router();

const MealsControllers = require("./controllers/MealsControllers");
const UsersControllers = require("./controllers/UsersControllers");

router.get("/meals", MealsControllers.browse);
router.get("/meals/:id", MealsControllers.read);
router.put("/meals/:id", MealsControllers.edit);
router.post("/meals", MealsControllers.add);
router.delete("/meals/:id", MealsControllers.destroy);

router.get("/users", UsersControllers.browse);
router.get("/users/:id", UsersControllers.read);
router.put("/users/:id", UsersControllers.edit);
router.post("/users", UsersControllers.add);
router.delete("/users/:id", UsersControllers.destroy);

module.exports = router;
