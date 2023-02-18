import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./DishCard.module.css";

function DishCard({ dish }) {
  const { idMeal, strMeal, strMealThumb, strInstructions, strCategory } = dish;

  return (
    <Link to={`/menu/${idMeal}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={strMealThumb} alt={strMeal} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{strMeal}</h3>
        <p className={styles.description}>{strInstructions}</p>
        <p className={styles.category}>{strCategory}</p>
      </div>
    </Link>
  );
}

DishCard.propTypes = {
  dish: PropTypes.shape({
    idMeal: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
    strInstructions: PropTypes.string.isRequired,
    strCategory: PropTypes.string.isRequired,
  }).isRequired,
};

export default DishCard;
