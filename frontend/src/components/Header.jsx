import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import gastronomie1 from "../assets/gastronomie1.png";

function Header() {
  return (
    <div id="containerHeader">
      <nav>
        <ul className="listNavbar">
          <li className="accueil">
            <Link to="/">
              <img src={gastronomie1} className="logoGastronomie" alt="logo" />
            </Link>
          </li>
          <li className="ingredients">
            <Link to="/Ingredients" className="link">
              <span className="flicker">Recettes par ingrédients</span>
            </Link>
          </li>
          <li className="pays">
            <Link to="/Pays" className="link">
              <span className="flicker">Recettes par pays</span>
            </Link>
          </li>
          <li className="favoris">
            <Link to="/Favoris" className="link">
              <span className="flicker">Favoris</span>
            </Link>
          </li>
          <li className="lexique">
            <Link to="/Lexique" className="link">
              <span className="flicker">Lexique</span>
            </Link>
          </li>
          <li className="profil">
            <Link to="/Profil" className="link">
              <span className="flicker">Profil</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
