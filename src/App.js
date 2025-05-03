import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DrinkPage from "./pages/DrinkPage";
import CartPage from "./pages/CartPage";
import Navbar from "./components/Navbar"; // 🆕
import CheckoutPage from "./pages/CheckoutPage"; // 🆕
import AdminPage from "./pages/AdminPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminOrdersPage from "./pages/AdminOrdersPage";
import MyOrdersPage from "./pages/MyOrdersPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar /> {/* 🆕 Navbar har sahifada bo'ladi */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/drink/:id" element={<DrinkPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />{" "}
        <Route path="/admin" element={<AdminPage />} /> {/* 🆕 */}
        <Route path="/admin-login" element={<AdminLoginPage />} /> {/* 🆕 */}
        <Route path="/admin-orders" element={<AdminOrdersPage />} /> {/* 🆕 */}
        <Route path="/my-orders" element={<MyOrdersPage />} /> {/* 🆕 */}
        {/* 🆕 Checkout sahifasi */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
