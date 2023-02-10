import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import gastronomie1 from "../assets/gastronomie1.png";

function Header() {
  return (
    <div className="nav">
      <ul className="list">
        <li className="logo">
          <Link to="/">
            <img src={gastronomie1} className="logo-gastronomie" alt="logo" />
          </Link>
        </li>
        <li className="ingredients">
          <Link to="/ingredients" className="link">
            Ingredients
          </Link>
        </li>
        <li className="pays">
          <Link to="/pays" className="link">
            Recettes par pays
          </Link>
        </li>
        <li className="favoris">
          <Link to="/favoris" className="link">
            Favoris
          </Link>
        </li>
        <li className="lexique">
          <Link to="/Lexique" className="link">
            Lexique
          </Link>
        </li>
        <li className="profil">
          <Link to="/profil" className="link">
            Profil
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
