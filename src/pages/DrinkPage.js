import React from "react";
import { useParams } from "react-router-dom";
import drinks from "../data/drinksData";
import { useCart } from "../components/CartContext";

const DrinkPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const drink = drinks.find((item) => item.id.toString() === id);

  if (!drink) return <div>Ichimlik topilmadi</div>;

  return (
    <div className="container">
      <h1>{drink.name}</h1>
      <img
        src={drink.image}
        alt={drink.name}
        style={{ width: "100%", maxWidth: "500px", borderRadius: "10px" }}
      />
      <p style={{ marginTop: "20px" }}>{drink.description}</p>
      <div
        className="price"
        style={{ marginTop: "10px", fontWeight: "bold", fontSize: "20px" }}
      >
        {drink?.price?.toLocaleString()} so'm
      </div>
      <button onClick={() => addToCart(drink)} style={{ marginTop: "20px" }}>
        Savatga qo‘shish
      </button>
    </div>
  );
};

export default DrinkPage;
