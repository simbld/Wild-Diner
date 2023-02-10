import PropTypes from "prop-types";
import React, { useState } from "react";
import "../styles/MealsCard.css";

export default function MealsCard({
  mealsName,
  mealsThumb,
  mealsInstructions,
  mealsCategory,
  mealsIngredients,
  mealsMeasures,
  area,
  mealsTags,
  initialLikeCount,
  initialIsFavorite,
}) {
  const [likeCount, setLikeCount] = useState(initialLikeCount);
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);

  function handleClickFavorite() {
    setIsFavorite(!isFavorite);
    setLikeCount(isFavorite ? likeCount - 1 : likeCount + 1);
  }
  return (
    <div className="cardContainer">
      <div className="rightContainer">{area}</div>
      <div className="leftContainer">
        {mealsTags}
        <div className="cardDescription">
          <figure>
            <img src={mealsThumb} alt={mealsName} />
            <figcaption>
              <h3>{mealsName}</h3>
              <p>{mealsInstructions}</p>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="mealsCategory">
        {mealsCategory}
        <div className="mealsContent">
          {mealsIngredients}
          {mealsMeasures}
        </div>
      </div>
      <div className="likeCount">{likeCount}</div>

      <div
        id="favorite"
        type="button"
        className={isFavorite ? "isFavorite" : "notFavorite"}
        onClick={handleClickFavorite}
      />
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
  initialIsFavorite: PropTypes.bool.isRequired,
  initialLikeCount: PropTypes.number.isRequired,
};
