import React from "react";
import { Link } from "react-router-dom";
import Home from "../pages/Home";

export default function NavBar() {
  return (
    <nav>
      <Link className="nav-link" to="/">
        Home
        <Home />
      </Link>
      <Link className="nav-link" to="/Ingredients">
        Ingredients
      </Link>
      <Link className="nav-link" to="/Pays">
        Pays
      </Link>
      <Link className="nav-link" to="/Favoris">
        Favoris
      </Link>
      <Link className="nav-link" to="/Lexique">
        Lexique
      </Link>
      <Link className="nav-link" to="/Profil">
        Profil
      </Link>
      <div id="indicator" />
    </nav>
  );
}
