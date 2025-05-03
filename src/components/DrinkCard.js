import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import "./DrinkCard.scss";

const DrinkCard = ({ drink }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div className="drink-card">
      <img
        src={drink.image}
        alt={drink.name}
        style={{ objectFit: "initial" }}
      />
      <div className="content">
        <h2>{drink.name}</h2>
        <p>{drink.description}</p>
        <div className="price">{drink?.price?.toLocaleString()} so'm</div>
        <div style={{ marginTop: "10px" }}>
          <button onClick={() => navigate(`/drink/${drink.id}`)}>
            Batafsil
          </button>
          {/* <button
            onClick={() => addToCart(drink)}
            style={{ marginLeft: "10px" }}
          >
            Savatga
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default DrinkCard;
