import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckoutPage = () => {
  const { cart, setCart } = useCart();
  const navigate = useNavigate();
  const totalPrice = cart.reduce(
    (sum, item) => sum + Number(item.price || 0),
    0
  );
  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error("❌ Savat bo‘sh! Buyurtma berolmaysiz.");
      return;
    }

    // 🚀 Yangi buyurtma obyektini yasaymiz
    const newOrder = {
      id: Date.now(),
      items: cart,
      total: cart.reduce((sum, item) => sum + Number(item.price || 0), 0),
      date: new Date().toLocaleString(), // Sana va vaqt
    };

    // 🚀 Oldingi buyurtmalarni LocalStorage'dan olamiz
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

    // 🚀 Yangi buyurtmani qo'shamiz
    localStorage.setItem(
      "orders",
      JSON.stringify([...existingOrders, newOrder])
    );

    // 🚀 Toast, Savatni tozalash va Home pagega redirect
    toast.success("✅ Buyurtma muvaffaqiyatli qabul qilindi!", {
      position: "top-center",
      autoClose: 2000,
    });

    setTimeout(() => {
      setCart([]);
      navigate("/");
    }, 2000);
  };

  return (
    <div className="container">
      <h1>Checkout</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {cart.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {item.name} — {Number(item.price).toLocaleString()} so'm
          </li>
        ))}
      </ul>
      <h2>Umumiy: {totalPrice.toLocaleString()} so'm</h2>
      <button style={{ marginTop: "20px" }} onClick={handleCheckout}>
        Buyurtmani tasdiqlash
      </button>

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default CheckoutPage;
