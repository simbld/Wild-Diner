/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from "prop-types";
import React, { useState } from "react";

export default function MealsCard({
  foodImage,
  mealName,
  description,
  price,
  initialLikeCount,
  initialIsFavorite,
}) {
  const [likeCount, setLikeCount] = useState(initialLikeCount);
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);

  function handleClickFavorite() {
    setIsFavorite(!isFavorite);
    setLikeCount(isFavorite ? likeCount - 1 : likeCount + 1);
  }
  return (
    <div className="cardContainer">
      <div className="leftContainer">
        <figure className="imgContainer">
          <img src={foodImage} alt={mealName} />
        </figure>
      </div>
      <div className="cardDescription">
        <div className="media">
          <div className="media-content">
            <p className="rightContainer">{mealName}</p>
            <p className="subtitle is-6">{price} €</p>

            <p className="subtitle is-6">{description}</p>
          </div>
        </div>
        <div className="LikeContainer">
          <div
            id="favorite"
            onClick={handleClickFavorite}
            className={isFavorite ? "isFavorite" : "notFavorite"}
          />
          <span className="likeCount">{likeCount}</span>
        </div>
      </div>
    </div>
  );
}

MealsCard.propTypes = {
  mealName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  foodImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  initialIsFavorite: PropTypes.bool.isRequired,
  initialLikeCount: PropTypes.number.isRequired,
};
