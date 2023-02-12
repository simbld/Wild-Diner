import React from "react";
import Home from "./pages/Home";
import "./styles/App.css";
import restaurant from "./assets/restaurant.png";

function App() {
  return (
    <div className="App" src={restaurant} alt="background">
      <Home />
    </div>
  );
}

export default App;
