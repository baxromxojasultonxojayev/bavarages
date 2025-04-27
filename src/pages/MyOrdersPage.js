import React, { useEffect, useState } from "react";

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  if (orders.length === 0) {
    return (
      <div className="container">
        <h2>Siz hali buyurtma bermagansiz.</h2>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: "20px" }}>
      <h1>🛍 Mening Buyurtmalarim</h1>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {orders.map((order) => (
          <li key={order.id} style={styles.card}>
            <h3>🆔 Buyurtma ID: {order.id}</h3>
            <p>🕒 Sana: {order.date}</p>
            <p>
              🏷 Holat: <strong>{order.status || "Yangi"}</strong>
            </p>
            <p>Mahsulotlar:</p>
            <ul style={{ marginLeft: "20px" }}>
              {order.items.map((item, idx) => (
                <li key={idx}>
                  {item.name} — {Number(item.price).toLocaleString()} so'm
                </li>
              ))}
            </ul>
            <h4>💵 Umumiy narx: {order.total.toLocaleString()} so'm</h4>
          </li>
        ))}
      </ul>
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
};

export default MyOrdersPage;
