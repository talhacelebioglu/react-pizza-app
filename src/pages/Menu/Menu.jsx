import React from "react";
import { useState } from "react";
import { useContext } from "react";
import menuData from "../../Data/menuData";
import CartContext from "../../Context/CartContext";
import "./Menu.css";

export default function Menu() {
  const { addToCart } = useContext(CartContext);
  const [menuItems, setMenuItems] = useState(menuData);

  const filterSize = (size) => {
    if (size === "All") {
      setMenuItems(menuData);
      return;
    }
    const newSize = menuData.filter((item) => item.size === size);
    setMenuItems(newSize);
  };

  return (
    <div className="menu">
      <h1 style={{ textAlign: "center", margin: "50px 0" }}>Our Menu</h1>
      <div className="filter">
        <button className="btn-add-cart-menu" onClick={() => filterSize("All")}>
          All
        </button>
        <button
          className="btn-add-cart-menu"
          onClick={() => filterSize("Small")}
        >
          Small
        </button>
        <button
          className="btn-add-cart-menu"
          onClick={() => filterSize("Regular")}
        >
          Regular
        </button>
        <button
          className="btn-add-cart-menu"
          onClick={() => filterSize("Large")}
        >
          Large
        </button>
      </div>
      <div className="cards-menu">
        {menuItems.map((item) => (
          <div key={item.id} className="card-menu">
            <img
              src={item.img}
              className="card-img-menu"
              alt={item.title}
            ></img>
            <div className="card-body-menu">
              <h4>{item.title}</h4>
              <h5>({item.size})</h5>
              <p>{item.desc}</p>
            </div>
            <div className="card-footer-menu">
              <span
                style={{
                  color: "#05A84B",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                }}
              >
                ${item.price.toFixed(2)}
              </span>
              <button
                onClick={() => addToCart(item)}
                className="btn-add-cart-menu"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
