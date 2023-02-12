import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/MealsCard.css";
import Favorite from "./Favorite";
import maximize from "../assets/maximize-2.svg";

export default function MealsCard({
  mealsName,
  mealsThumb,
  mealsInstructions,
  mealsCategory,
  mealsIngredients,
  mealsMeasures,
  area,
  mealsTags,
}) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="cardContainer">
      <div className="mealThumbContainer">
        <img src={mealsThumb} alt={mealsName} className="mealsThumb" />
        <div className="mealName">{mealsName}</div>
      </div>
      <div className="mealDetailsContainer">
        <div className="mealCategory">{mealsCategory}</div>
        <div className="mealArea">{area}</div>
        <div className="mealTags">{mealsTags}</div>
        <button
          className="instructionsButton"
          onClick={() => setShowDetails(!showDetails)}
          type="button"
        >
          <img src={maximize} alt="extend icon" />
        </button>
        {showDetails && (
          <div className="mealDetails">
            <div className="mealInstructions">{mealsInstructions}</div>
            <div className="mealIngredients">{mealsIngredients}</div>
            <div className="mealMeasures">{mealsMeasures}</div>
          </div>
        )}
      </div>
      <Favorite />
    </div>
  );
}

MealsCard.propTypes = {
  mealsName: PropTypes.string.isRequired,
  mealsTags: PropTypes.string.isRequired,
  mealsInstructions: PropTypes.string.isRequired,
  mealsCategory: PropTypes.string.isRequired,
  mealsIngredients: PropTypes.string.isRequired,
  mealsMeasures: PropTypes.string.isRequired,
  mealsThumb: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
};
