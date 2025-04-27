import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin !== "true") {
      navigate("/admin-login");
    }

    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, [navigate]);

  const updateOrderStatus = (orderId, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  return (
    <div className="container" style={{ padding: "20px" }}>
      <h1>📦 Buyurtmalar ro'yxati (Status boshqaruvi bilan)</h1>

      {orders.length === 0 ? (
        <p>Hech qanday buyurtmalar topilmadi.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {orders.map((order) => (
            <li key={order.id} style={styles.card}>
              <h3>🆔 Buyurtma ID: {order.id}</h3>
              <p>🕒 Sana: {order.date}</p>
              <p>🛍 Mahsulotlar:</p>
              <ul style={{ marginLeft: "20px" }}>
                {order.items.map((item, idx) => (
                  <li key={idx}>
                    {item.name} — {Number(item.price).toLocaleString()} so'm
                  </li>
                ))}
              </ul>
              <h4>💵 Umumiy narx: {order.total.toLocaleString()} so'm</h4>
              <p>
                🏷 Holat: <strong>{order.status || "Yangi"}</strong>
              </p>

              <select
                style={styles.select}
                value={order.status || "Yangi"}
                onChange={(e) => updateOrderStatus(order.id, e.target.value)}
              >
                <option value="Yangi">Yangi</option>
                <option value="Qabul qilindi">Qabul qilindi</option>
                <option value="Yetkazildi">Yetkazildi</option>
              </select>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  card: {
    background: "#fff",
    borderRadius: "8px",
    padding: "20px",
    marginBottom: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  select: {
    marginTop: "10px",
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
};

export default AdminOrdersPage;
