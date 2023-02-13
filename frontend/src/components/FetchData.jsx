import { useState } from "react";
import MealsCard from "./MealsCard";
import FetchMeals from "./FetchMeals";

export default function FetchData() {
  const [meals, setMeals] = useState([]);

  return (
    <div className="App">
      <FetchMeals setMeals={setMeals} />
      {meals.map((meal) => (
        <MealsCard
          key={meal.idMeal}
          foodImage={meal.strMealThumb}
          mealsName={meal.strMeal}
          mealsInstructions={meal.strInstructions}
          area={meal.strArea}
          initialLikeCount={0}
          initialIsFavorite={false}
        />
      ))}
    </div>
  );
}
