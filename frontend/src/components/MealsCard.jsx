import PropTypes from "prop-types";
import "../styles/MealsCard.css";
import Favorite from "./Favorite";

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
