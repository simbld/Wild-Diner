import { useEffect } from "react";
import PropTypes from "prop-types";

export default function FetchData({ setMeals }) {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v2/9973533/search.php?s="
      );
      const data = await response.json();
      const sortedMeals = data.meals.sort((a, b) =>
        a.strMeal.localeCompare(b.strMeal)
      );
      setMeals(sortedMeals);
    };
    fetchData();
  }, [setMeals]);

  return null;
}

FetchData.propTypes = {
  setMeals: PropTypes.func.isRequired,
};
