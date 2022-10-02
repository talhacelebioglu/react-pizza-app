import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (id, img, title, size, price) => {
    setItems((prevState) => [...prevState, { id, img, title, size, price }]);
    toast.success("Added to cart!");
  };

  const removeToCart = (id) => {
    setItems((prevState) => [...prevState].filter((item) => item.id !== id));
    toast.error("Removed from cart!");
  };

  return (
    <CartContext.Provider value={{ items, addToCart, removeToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
