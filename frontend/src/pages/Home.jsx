import React from "react";
import "../styles/Home.css";
import restaurant from "../assets/restaurant.png";

export default function Home() {
  return (
    <div>
      <img src={restaurant} alt="background" className="containerHome" />
    </div>
  );
}
