import React from "react";
import PropTypes from "prop-types";
import DishCard from "../DishCard/DishCard";

function SearchResultList({ dishes }) {
  if (dishes.length === 0) {
    return <p>No results found.</p>;
  }

  return (
    <div className="search-results">
      {dishes.map((dish) => (
        <DishCard key={dish.id} dish={dish} />
      ))}
    </div>
  );
}

SearchResultList.propTypes = {
  dishes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default SearchResultList;
