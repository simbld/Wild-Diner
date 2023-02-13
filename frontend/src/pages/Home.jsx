import React from "react";
import restaurant from "../assets/restaurant.png";

export default function Home() {
  return (
    <div>
      <div className="homeHeader">
        <form className="search">
          <input type="search" placeholder="Find a dish" />
        </form>
        <img src={restaurant} alt="background" className="containerHome" />
        <h2 className="homeTitle">Recettes du Monde</h2>
      </div>
    </div>
  );
}
