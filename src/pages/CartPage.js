import React from "react";
import { useCart } from "../components/CartContext";
import { useNavigate } from "react-router-dom"; // 🆕

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate(); // 🆕

  const totalPrice = cart.reduce(
    (sum, item) => sum + Number(item.price || 0),
    0
  );

  if (cart.length === 0) {
    return (
      <div className="container">
        <h2>Savat bo‘sh</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Savat</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {cart.map((item, index) => (
          <li
            key={index}
            style={{
              marginBottom: "15px",
              borderBottom: "1px solid #ccc",
              paddingBottom: "10px",
            }}
          >
            <h3>{item.name}</h3>
            <p>{Number(item.price).toLocaleString()} so'm</p>
            <button onClick={() => removeFromCart(index)}>O'chirish</button>
          </li>
        ))}
      </ul>
      <h2>Umumiy: {totalPrice.toLocaleString()} so'm</h2>
      {/* 🆕 Checkoutga o'tkazamiz */}
      <button
        style={{ marginTop: "20px" }}
        onClick={() => navigate("/checkout")}
      >
        Buyurtma berish
      </button>
    </div>
  );
};

export default CartPage;
