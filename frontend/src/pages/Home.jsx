import React, { useState } from "react";
import "../styles/Home.css";
import "../styles/MealsCard.css";
import restaurant from "../assets/restaurant.png";
import MealsCard from "../components/MealsCard";
import FetchMeals from "../components/FetchMeals";

export default function Home() {
  const [meals, setMeals] = useState([]);
  return (
    <div>
      <div className="homeHeader">
        <form className="search">
          <input type="text" placeholder="Trouver un plat" />
        </form>
        <img src={restaurant} alt="background" className="containerHome" />
        <h2 className="homeTitle">Recettes du Monde</h2>
      </div>
      <FetchMeals setMeals={setMeals} />
      {meals.map((meal) => (
        <MealsCard
          key={meal.idMeal}
          mealsThumb={meal.strMealThumb}
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
