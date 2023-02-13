import React, { useState } from "react";
import "../styles/App.css";
import "../styles/Home.css";
import { useQuery } from "react-query";
import axios from "axios";

export default function Search() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?query=${search}&apiKey=9c3b4f0d0f2c4d4c8d7e2b2f1a7b0e4f`
    );
    return data;
  };

  const { data, status } = useQuery(["recipes", search], getRecipes);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(search);
  };

  return (
    <div className="containerSearch">
      <div className="containerTitle">
        <h2 className="homeTitle">Rechercher une recette</h2>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Rechercher une recette"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="button">
          <div className="text">
            <span className="flicker">Rechercher</span>
          </div>
        </button>
      </form>
      <div className="containerRecipes">
        {status === "loading" && <div>Loading data...</div>}
        {status === "error" && <div>Error fetching data</div>}
        {status === "success" && (
          <>
            {data.results.map((recipe) => (
              <div className="containerRecipe" key={recipe.id}>
                <div className="containerImage">
                  <img
                    src={recipe.image}
                    className="image"
                    alt={recipe.title}
                  />
                </div>
                <div className="containerTitle">
                  <h3 className="title">{recipe.title}</h3>
                </div>
                <div className="containerButton">
                  <button
                    type="button"
                    className="button"
                    onClick={() => {
                      setRecipes([...recipes, recipe]);
                      localStorage.setItem("recipes", JSON.stringify(recipes));
                    }}
                  >
                    <div className="text">
                      <span className="flicker">Ajouter</span>
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
