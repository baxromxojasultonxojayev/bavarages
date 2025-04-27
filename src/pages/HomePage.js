import React from "react";
import drinks from "../data/drinksData";
import DrinkCard from "../components/DrinkCard";
import "./HomePage.scss";

const HomePage = () => {
  // const drinks = JSON.parse(localStorage.getItem("drinks")) || [];

  return (
    <div className="container">
      <h1>Sharbatlar Menyusi</h1>
      <div className="drinks-list">
        {drinks.map((drink) => (
          <DrinkCard key={drink.id} drink={drink} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
