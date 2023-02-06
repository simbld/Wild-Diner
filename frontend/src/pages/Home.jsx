import "../styles/Home.css";
import MealsCard from "../components/MealsCard";
import logo from "../assets/logo.png";

export default function Home() {
  return (
    <header className="App-header">
      <h2>
        Ici le carousel
        <main className="navbar">
          <MealsCard />
        </main>
        !
      </h2>
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
}
