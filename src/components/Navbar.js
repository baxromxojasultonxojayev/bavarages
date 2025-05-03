import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useCart } from "../components/CartContext";

const Navbar = () => {
  // const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false); // 🆕 Hamburger menyu uchun

  // const totalPrice = cart.reduce(
  //   (sum, item) => sum + Number(item.price || 0),
  //   0
  // );

  return (
    <nav style={styles.navbar}>
      {/* Hamburger button */}
      <div style={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "X" : "☰"}
      </div>

      {/* Menyu linklar */}
      <div style={{ ...styles.navItems, display: isOpen ? "flex" : "none" }}>
        <Link to="/" style={styles.link} onClick={() => setIsOpen(false)}>
          🏠 Bosh sahifa
        </Link>
        {/* <Link
          to="/checkout"
          style={styles.link}
          onClick={() => setIsOpen(false)}
        >
          ✅ Checkout
        </Link> */}
        {/* <Link
          to="/my-orders"
          style={styles.link}
          onClick={() => setIsOpen(false)}
        >
          ✅ User buyurtmalari
        </Link>
        <Link to="/admin" style={styles.link} onClick={() => setIsOpen(false)}>
          ✅ Admin sahifasi
        </Link>
        <Link
          to="/admin-orders"
          style={styles.link}
          onClick={() => setIsOpen(false)}
        >
          ✅ Admin Zakazlari
        </Link> */}
      </div>

      {/* Savat */}
      <div style={styles.cart}>
        {/* <Link to="/cart" style={styles.link}>
          🛒 Savat ({cart.length}) - {totalPrice.toLocaleString()} so'm
        </Link> */}
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#007bff",
    padding: "10px 20px",
    position: "relative",
  },
  hamburger: {
    fontSize: "28px",
    color: "white",
    cursor: "pointer",
    display: "block",
  },
  navItems: {
    flexDirection: "column",
    gap: "10px",
    background: "#007bff",
    position: "absolute",
    top: "60px",
    left: "0",
    right: "0",
    padding: "20px",
    zIndex: "10",
  },
  cart: {
    marginTop: "10px",
  },
  link: {
    color: "white",
    fontSize: "18px",
    textDecoration: "none",
    whiteSpace: "nowrap",
  },
};

export default Navbar;
