import PropTypes from "prop-types";

const MealsType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  idMeal: PropTypes.string.isRequired,
  mealsName: PropTypes.string.isRequired,
  mealsCategory: PropTypes.string.isRequired,
  mealsIngredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  mealsMeasures: PropTypes.arrayOf(PropTypes.string).isRequired,
  mealsTags: PropTypes.string.isRequired,
  mealsInstructions: PropTypes.string.isRequired,
  mealsThumb: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  initialIsFavorite: PropTypes.bool.isRequired,
  initialLikeCount: PropTypes.number.isRequired,
});

export default MealsType;
