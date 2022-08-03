import React from "react";
import cardData from "../cardData";

export default function Card() {

  return (
    <div className="recommended">
      <h1 style={{ textAlign: "center", margin: "50px 0" }}>
        Recommended menu
      </h1>
      <div className="cards">
        {cardData.map((item) => (
          <div key={item.id} className="card">
            <img src={item.img} className="card-img" alt={item.title}></img>
            <div className="card-body">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <span
                style={{
                  color: "#05A84B",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                ${item.price.toFixed(2)}
              </span>
            </div>
            <div className="card-footer">
              <select
                className="pizza-size"
              >
                <option value="regular">Regular</option>
              </select>
              <button className="btn-add-cart">ADD TO CART</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
