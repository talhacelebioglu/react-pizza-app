import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  //addToCart
  const addToCart = (i) => {
    const addCart = items.find((cartItem) => cartItem.id === i.id)
      ? items.map((cartItem) =>
          cartItem.id === i.id
            ? { ...cartItem, qty: cartItem.qty + 1 }
            : cartItem
        )
      : [...items, { ...i, qty: 1 }];
    setItems(addCart);
    toast.success("Added to cart!");
  };

  //removeFromCart
  const removeFromCart = (id) => {
    const removeCart = items.filter((cartItem) => cartItem.id !== id);
    setItems(removeCart);
    toast.error("Removed from cart!");
  };

  //increaseItem
  const increaseItem = (id) => {
    const inc = items.map((cartItem) =>
      cartItem.id === id ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem
    );
    setItems(inc);
    toast.success("İtem added!");
  };

  //decreaseItem
  const decreaseItem = (id) => {
    const dec = items.map((cartItem) =>
      cartItem.id === id
        ? { ...cartItem, qty: cartItem.qty > 1 ? cartItem.qty - 1 : 1 }
        : cartItem
    );
    setItems(dec);
  };

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, increaseItem, decreaseItem }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
