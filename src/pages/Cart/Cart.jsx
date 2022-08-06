import React from "react";
import "./Cart.css";

export default function Cart() {
  return (
    <div className="cart-page">
      <h1 style={{ textAlign: "center", margin: "50px 0" }}>My Cart</h1>
      <div className="cart">
        <div className="cart-header">
          <div className="cart-item">
            <img src="img/Cheese Lovers new.png" alt="" className="cart-img" />
            <div className="cart-body">
              <h4>Cheese Lovers</h4>
              <h5>(Regular)</h5>
              <span
                style={{
                  color: "#05A84B",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                $20.00
              </span>
            </div>
            <div className="cart-icons">
              <div className="icon-plusminus">
                <button>
                  <i className="fa-solid fa-minus"></i>
                </button>
                <span
                  style={{
                    color: "#05A84B",
                    fontSize: "20px",
                  }}
                >
                  1
                </span>
                <button>
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
              <div className="icon-trash">
                <button className="btn-trash">
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="cart-item">
            <img src="img/Cheese Lovers new.png" alt="" className="cart-img" />
            <div className="cart-body">
              <h4>Cheese Lovers</h4>
              <h5>(Regular)</h5>
              <span
                style={{
                  color: "#05A84B",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                $20.00
              </span>
            </div>
            <div className="cart-icons">
              <div className="icon-plusminus">
                <button>
                  <i className="fa-solid fa-minus"></i>
                </button>
                <span
                  style={{
                    color: "#05A84B",
                    fontSize: "20px",
                  }}
                >
                  1
                </span>
                <button>
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
              <div className="icon-trash">
                <button className="btn-trash">
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-footer">
          <h3>
            Total =
            <span
              style={{
                color: "#05A84B",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              {" "}
              $40.00
            </span>
          </h3>
          <button className="btn-sign-in">Checkout</button>
        </div>
      </div>
    </div>
  );
}
