import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/Lexique.css";
import FetchMeals from "../components/FetchMeals";

export default function Lexique() {
  const [meals, setMeals] = useState([]);
  return (
    <div>
      <div className="container">
        <div className="list">
          <div className="list-group">
            <div className="list-header">A</div>
            <div className="list-content">
              <FetchMeals setMeals={setMeals} />
              {meals
                .filter((meal) => meal.strMeal.toLowerCase().startsWith("a"))
                .sort((a, b) => a.strMeal.localeCompare(b.strMeal))
                .map((meal) => (
                  <div key={meal.idMeal}>{meal.strMeal}</div>
                ))}
            </div>
          </div>
          <div className="list-group">
            <div className="list-header">B</div>
            <div className="list-content">
              <div>Bird</div>
              <div>Banana</div>
              <div>Buzzard</div>
              <div>Bee</div>
              <div>Bacon</div>
            </div>
          </div>
          <div className="list-group">
            <div className="list-header">C</div>
            <div className="list-content">
              <div>Caramel</div>
              <div>Cat</div>
              <div>Candy</div>
              <div>Coffee</div>
            </div>
          </div>
          <div className="list-group">
            <div className="list-header">D</div>
            <div className="list-content">
              <div>Dog</div>
              <div>Date</div>
              <div>Danish</div>
              <div>Dandelion</div>
            </div>
          </div>
        </div>
      </div>

      <div className="side-links">
        <a
          href="./pages/Home"
          target="_blank"
          className="side-link side-link-youtube"
        >
          <i className="fab fa-youtube-square side-link-icon" />
          <span className="side-link-text">View Tutorial</span>
        </a>
        <a
          href="./pages/Filters"
          target="_blank"
          className="side-link side-link-github side-link-icon"
        >
          <i className="fab fa-github-square" />
          <span className="side-link-text">View GitHub</span>
        </a>
        <a
          href="./pages/Favorite"
          target="_blank"
          className="side-link side-link-twitter"
        >
          <i className="fab fa-twitter-square side-link-icon" />
          <span className="side-link-text">View Twitter</span>
        </a>
      </div>
    </div>
  );
}

FetchMeals.propTypes = {
  setMeals: PropTypes.func.isRequired,
};
