import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const [drinks, setDrinks] = useState([]);
  const [newDrink, setNewDrink] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin !== "true") {
      navigate("/admin-login");
    }

    // 🚀 LocalStorage'dan ichimliklarni olish
    const savedDrinks = JSON.parse(localStorage.getItem("drinks"));
    if (savedDrinks) {
      setDrinks(savedDrinks);
    }
  }, [navigate]);

  useEffect(() => {
    // 🚀 Har safar drinks o'zgarganda LocalStorage'ga saqlash
    localStorage.setItem("drinks", JSON.stringify(drinks));
  }, [drinks]);

  const handleAddDrink = () => {
    if (
      !newDrink.name ||
      !newDrink.description ||
      !newDrink.price ||
      !newDrink.image
    ) {
      alert("Barcha maydonlarni to'ldiring!");
      return;
    }
    setDrinks([...drinks, { ...newDrink, id: Date.now() }]);
    setNewDrink({ name: "", description: "", price: "", image: "" });
  };

  const handleDeleteDrink = (id) => {
    setDrinks(drinks.filter((drink) => drink.id !== id));
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin"); // 🛡 Admin sessiyani o'chiramiz
    navigate("/admin-login"); // Login sahifaga yuboramiz
  };

  return (
    <div className="container" style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Admin Panel — Ichimliklar boshqaruvi</h1>
        <button onClick={handleLogout} style={styles.logoutButton}>
          🚪 Logout
        </button>
      </div>

      <div style={styles.formWrapper}>
        <input
          type="text"
          placeholder="Nomi"
          value={newDrink.name}
          onChange={(e) => setNewDrink({ ...newDrink, name: e.target.value })}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Tavsif"
          value={newDrink.description}
          onChange={(e) =>
            setNewDrink({ ...newDrink, description: e.target.value })
          }
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Narx"
          value={newDrink.price}
          onChange={(e) => setNewDrink({ ...newDrink, price: e.target.value })}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Rasm URL"
          value={newDrink.image}
          onChange={(e) => setNewDrink({ ...newDrink, image: e.target.value })}
          style={styles.input}
        />
        <button onClick={handleAddDrink} style={styles.addButton}>
          ➕ Ichimlik qo‘shish
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "40px" }}>
        {drinks.map((drink) => (
          <li key={drink.id} style={styles.card}>
            <img src={drink.image} alt={drink.name} style={styles.image} />
            <div style={styles.cardContent}>
              <h3>{drink.name}</h3>
              <p>{drink.description}</p>
              <p>
                <strong>{Number(drink.price).toLocaleString()} so'm</strong>
              </p>
              <button
                onClick={() => handleDeleteDrink(drink.id)}
                style={styles.deleteButton}
              >
                ❌ O'chirish
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  formWrapper: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    justifyContent: "center",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    width: "220px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  addButton: {
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    height: "42px",
  },
  logoutButton: {
    backgroundColor: "#dc3545",
    color: "white",
    padding: "8px 16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  card: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    marginBottom: "20px",
    background: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  image: {
    width: "120px",
    height: "80px",
    objectFit: "cover",
    borderRadius: "8px",
    marginRight: "20px",
  },
  cardContent: {
    flex: 1,
  },
  deleteButton: {
    marginTop: "10px",
    backgroundColor: "#dc3545",
    color: "white",
    padding: "8px 15px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default AdminPage;
