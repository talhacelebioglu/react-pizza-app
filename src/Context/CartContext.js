import React from "react";
import { useState } from "react";
import { createContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (id, img, title, size, price) => {
    setItems((prevState) => [...prevState, { id, img, title, size, price }]);
  };

  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
