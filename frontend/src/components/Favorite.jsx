/* eslint-disable jsx-a11y/control-has-associated-label */
import PropTypes from "prop-types";
import React, { useState } from "react";

export default function Favorite({ initialLikeCount, initialIsFavorite }) {
  const [likeCount, setLikeCount] = useState(initialLikeCount);
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);

  function handleClickFavorite() {
    setIsFavorite(!isFavorite);
    setLikeCount(isFavorite ? likeCount - 1 : likeCount + 1);
  }
  return (
    <div className="cardContainer">
      <div className="likeCount">{likeCount}</div>
      <div
        id="favorite"
        type="button"
        className={isFavorite ? "isFavorite" : "notFavorite"}
        onClick={handleClickFavorite}
        onKeyDown={handleClickFavorite}
        role="button"
        tabIndex="0"
      />
    </div>
  );
}

Favorite.propTypes = {
  initialLikeCount: PropTypes.number.isRequired,
  initialIsFavorite: PropTypes.bool.isRequired,
};
