import React from "react";
import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import "./Menu.css";

export default function Menu({ menuData, filterSize }) {
  const { addToCart } = useContext(CartContext);

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
        {menuData.map((item) => (
          <div key={item.id} className="card-menu">
            <img
              src={item.img}
              className="card-img-menu"
              alt={item.title}
            ></img>
            <div className="card-body-menu">
              <h3>{item.title}</h3>
              <h4>({item.size})</h4>
              <p>{item.desc}</p>
            </div>
            <div className="card-footer-menu">
              <span
                style={{
                  color: "#05A84B",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                ${item.price.toFixed(2)}
              </span>
              <button
                onClick={() =>
                  addToCart(
                    item.id,
                    item.img,
                    item.title,
                    item.size,
                    item.price
                  )
                }
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
