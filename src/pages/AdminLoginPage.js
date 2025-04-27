import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (password === "admin123") {
      // 🛡 Parol shu bo'ladi
      localStorage.setItem("isAdmin", "true");
      navigate("/admin");
    } else {
      setError("❌ Noto'g'ri parol! Qayta urinib ko'ring.");
    }
  };

  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <h1>Admin Login</h1>
      <input
        type="password"
        placeholder="Parol kiriting"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: "10px", marginTop: "20px", width: "300px" }}
      />
      <br />
      <button style={{ marginTop: "20px" }} onClick={handleLogin}>
        Kirish
      </button>
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </div>
  );
};

export default AdminLoginPage;
