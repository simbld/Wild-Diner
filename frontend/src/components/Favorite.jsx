import React, { useState } from "react";
import PropTypes from "prop-types";
import LikeCounter from "./LikeCounter";

export default function Favorite({ initialLikeCount, initialIsFavorite }) {
  const [likeCount, setLikeCount] = useState(initialLikeCount);
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);

  function handleClick() {
    setIsFavorite(!isFavorite);
    setLikeCount(isFavorite ? likeCount - 1 : likeCount + 1);
  }

  return (
    <div className="cardContainer">
      <LikeCounter initialLikeCount={likeCount} />
      <div
        id="favorite-button"
        type="button"
        className={isFavorite ? "isFavorite" : "notFavorite"}
        onClick={handleClick}
        onKeyDown={handleClick}
        role="button"
        tabIndex="0"
        aria-label="Like/Dislike"
      />
    </div>
  );
}

Favorite.propTypes = {
  initialLikeCount: PropTypes.number.isRequired,
  initialIsFavorite: PropTypes.bool.isRequired,
};
