import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./DishDetails.module.css";

function DishDetails({ dish }) {
  return (
    <div className="dish-details">
      <div className="dish-details__image">
        <img src={dish.image} alt={dish.name} />
      </div>
      <div className="dish-details__info">
        <h1 className="dish-details__name">{dish.name}</h1>
        <p className="dish-details__description">{dish.description}</p>
        <p className="dish-details__price">{dish.price} €</p>
        <Link to="/menu" className="dish-details__back-link">
          &lt; Retour au menu
        </Link>
      </div>
    </div>
  );
}

DishDetails.propTypes = {
  dish: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default DishDetails;
