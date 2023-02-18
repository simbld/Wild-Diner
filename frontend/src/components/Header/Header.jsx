import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import styles from "./Header.module.css";

function Header({ dishes = [] }) {
  const slider = useRef(null);

  useEffect(() => {
    new Glide(slider.current, {
      type: "carousel",
      perView: 3,
      focusAt: "center",
      gap: 30,
      autoplay: 3000,
      hoverpause: true,
      breakpoints: {
        992: {
          perView: 2,
        },
        768: {
          perView: 1,
        },
      },
    }).mount();
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.slider} ref={slider}>
        {dishes.map((dish) => (
          <div key={dish.id} className="glide__slide">
            <img
              src={dish.image}
              alt={dish.name}
              className={styles.sliderImage}
            />
            <h2 className={styles.sliderTitle}>{dish.name}</h2>
            <p className={styles.sliderDescription}>{dish.description}</p>
            <p className={styles.sliderPrice}>{dish.price} €</p>
          </div>
        ))}
      </div>
    </header>
  );
}

Header.propTypes = {
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

export default Header;
