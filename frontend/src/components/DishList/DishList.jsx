import React from "react";
import PropTypes from "prop-types";
import DishCard from "../DishCard/DishCard";

function DishList({ dishes }) {
  return (
    <div className="row">
      {dishes.map((dish) => (
        <div key={dish.id} className="col-sm-6 col-md-4 col-lg-3 my-3">
          <DishCard dish={dish} />
        </div>
      ))}
    </div>
  );
}

DishList.propTypes = {
  dishes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      label: PropTypes.string,
      price: PropTypes.number.isRequired,
      featured: PropTypes.bool.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DishList;
