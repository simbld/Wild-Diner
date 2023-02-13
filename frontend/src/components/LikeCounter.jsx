import PropTypes from "prop-types";
import React, { useState } from "react";

export default function LikeCounter({ initialLikeCount }) {
  const [likeCount] = useState(initialLikeCount);

  return <div className="likeCount">{likeCount}</div>;
}

LikeCounter.propTypes = {
  initialLikeCount: PropTypes.number.isRequired,
};
