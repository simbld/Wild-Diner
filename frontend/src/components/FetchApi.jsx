import React, { useState } from "react";
import DataFetcher from "./DataFetcher";

function FetchApi() {
  const [dishes, setDishes] = useState([]);

  const handleData = (data) => {
    setDishes(data.meals);
  };

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <div>
      <DataFetcher
        url={import.meta.env.VITE_API_URL}
        onData={handleData}
        onError={handleError}
      />
      <ul>
        {dishes.map((dish) => (
          <li key={dish.idMeal}>{dish.strMeal}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchApi;
