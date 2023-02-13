import React, { useState } from "react";
import "../styles/App.css";
import "../styles/Home.css";
import { useQuery } from "react-query";
import axios from "axios";
import restaurant from "../assets/restaurant.png";

function SearchResults() {
  const [search, setSearch] = useState("");

  const { isLoading, error, data } = useQuery("recipes", () =>
    axios.get(
      `https://www.themealdb.com/api/json/v2/9973533/search.php?s=${search}`
    )
  );

  if (error) {
    return <div>Something went wrong ...</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const searchResult = data.data.meals;

  return (
    <div>
      <div className="homeHeader">
        <form className="search">
          <input
            type="search"
            placeholder="Find a dish"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <img src={restaurant} alt="background" className="containerHome" />
        <h2 className="homeTitle">Recipes from the World</h2>
      </div>
      <div className="search-result">
        {searchResult.map((item) => (
          <div className="search-result__item">
            <img src={item.strMealThumb} alt="" />
            <h3>{item.strMeal}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
