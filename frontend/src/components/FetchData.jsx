import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchApi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://www.themealdb.com/api/json/v2/9973533/search.php?s="
      );
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {" "}
      {data.map((meals) => (
        <li key={meals.id}>{meals.name}</li>
      ))}{" "}
    </div>
  );
}

export default FetchApi;
