import React, { useState } from "react";
import Home from "./pages/Home";
import MealsCard from "./components/MealsCard";
import FetchMeals from "./components/FetchMeals";

function App() {
  const [meals, setMeals] = useState([]);

  return (
    <div className="App">
      <Home />
      <FetchMeals setMeals={setMeals} />
      {meals.map((meal) => (
        <MealsCard
          key={meal.idMeal}
          foodImage={meal.strMealThumb}
          mealName={meal.strMeal}
          description={meal.strInstructions}
          area={meal.strArea}
          initialLikeCount={0}
          initialIsFavorite={false}
        />
      ))}
    </div>
  );
}

export default App;
