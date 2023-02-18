const express = require("express");

const router = express.Router();
const axios = require("axios");
const MealsControllers = require("./controllers/MealsControllers");

// Import meals from API and add to database
router.get("/import-meals", async (req, res) => {
  try {
    const response = await axios.get(process.env.VITE_API_URL);

    const { meals } = response.data;

    // Loop through each meal and add to the database using MealsControllers.add
    for (const meal of meals) {
      // eslint-disable-next-line no-await-in-loop
      await MealsControllers.add(meal);
    }
    res.json({ success: true });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
});

router.get("/meals", MealsControllers.browse);
router.get("/meals/:id", MealsControllers.read);
router.put("/meals/:id", MealsControllers.edit);
router.post("/meals", MealsControllers.add);
router.delete("/meals/:id", MealsControllers.destroy);

module.exports = router;
