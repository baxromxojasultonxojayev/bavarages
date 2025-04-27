import React from "react";

const Modal = ({ drink, onClose, onAddToCart }) => {
  if (!drink) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <img src={drink.image} alt={drink.name} />
        <h2>{drink.name}</h2>
        <p>{drink.description}</p>
        <div className="price">{drink?.price?.toLocaleString()} so'm</div>
        <button
          onClick={() => {
            onAddToCart(drink);
            onClose();
          }}
        >
          Savatga qo‘shish
        </button>
      </div>
    </div>
  );
};

export default Modal;
