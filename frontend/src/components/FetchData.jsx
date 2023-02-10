import { useEffect } from "react";
import PropTypes from "prop-types";

export default function FetchData({ setMeals }) {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v2/9973533/search.php?s="
      );
      const data = await response.json();
      setMeals(data.meals);
    };
    fetchData();
  }, [setMeals]);

  return null;
}

FetchData.propTypes = {
  setMeals: PropTypes.func.isRequired,
};
