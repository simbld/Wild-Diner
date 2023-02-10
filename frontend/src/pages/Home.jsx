import PropTypes from "prop-types";
import React from "react";
import "../styles/Home.css";
import Header from "../components/Header";
import logo from "../assets/logo.png";

export default function Home({ setCurrentPage }) {
  return (
    <div className="containerHome">
      <Header />
      <main className="containerMain">
        <div className="containerTitle">
          <h2 className="homeTitle">Découvrez les recettes du monde entier</h2>
        </div>
        <button
          type="button"
          className="button"
          onClick={() => setCurrentPage("acceuil")}
        >
          <div className="text">
            <span className="flicker">
              Découvrir
              <img src={logo} className="App-logo" alt="logo" />
            </span>
          </div>
        </button>
      </main>
    </div>
  );
}

Home.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
};
