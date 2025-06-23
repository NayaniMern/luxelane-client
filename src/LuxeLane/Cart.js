import React, { useEffect, useState } from "react";
import { useCart } from "./CartContext";
import "./Home.css";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { cartItems, removeFromCart, decreaseQuantity, increaseQuantity } = useCart();

  const [showForm, setShowForm] = useState(false); // to show/hide form

  // Total price calculation
  let totalPrice = 0;
  for (let i = 0; i < cartItems.length; i++) {
    let price = cartItems[i].price;
    let qty = cartItems[i].quantity;

    if (typeof price === "string") {
      price = price.replace(/[^0-9.]/g, "");
      price = parseFloat(price);
    }

    if (isNaN(price)) price = 0;
    if (!qty || qty < 1) qty = 1;

    totalPrice += price * qty;
  }

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2
        className="mb-3"
        style={{
          color: "#392467",
          fontSize: "35px",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        My Cart
      </h2>

      {cartItems.length === 0 ? (
        <p className="fs-5 text-capitalize fw-bold">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => {
            let price = item.price;
            if (typeof price === "string") {
              price = price.replace(/[^0-9.]/g, "");
              price = parseFloat(price);
            }
            if (isNaN(price)) price = 0;

            return (
              <div className="container" key={`${item.name}-${item.size}`}>
                <div className="row border border-dark rounded p-3 mb-3 align-items-center">
                  <div className="col-lg-8 d-flex">
                    <img src={item.image || item.image1} alt="error" width="80" />
                    <div className="ms-3">
                      <h4>{item.name}</h4>
                      <p>Size: {item.size}</p>
                      <p>Price: ₹{price.toFixed(2)}</p>
                    </div>
                  </div>

                  <div className="col-lg-2 d-flex justify-content-center mb-3 align-items-center gap-2">
                    <button onClick={() => decreaseQuantity(item.name, item.size)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.name, item.size)}>+</button>
                  </div>

                  <div className="col-lg-2 d-flex justify-content-center">
                    <button onClick={() => removeFromCart(item.name, item.size)} className="btn btn-danger">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="container">
            <div style={{ textAlign: "right", marginTop: "20px" }}>
              <h3 className="fs-4">Total: ₹ {totalPrice.toFixed(2)}</h3>
              <button
                onClick={toggleForm}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#8a3071",
                  fontSize: "17px",
                  color: "white",
                  border: "none",
                }}
              >
                {showForm ? "Close Form" : "Place Order"}
              </button>
            </div>
          </div>

          <div className={`container mt-4 order-form ${showForm ? "show" : ""}`}>
            <h4 className="mb-4 text-dark">Fill Order Details : </h4>
            <form>
              <div
                className="row fw-bold py-3 mx-2"
                style={{ boxShadow: "2px 3px 20px purple" }}
              >
                <div className="col-md-4 mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" placeholder="Enter your name" />
                </div>

                <div className="col-md-4 mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="Enter your email" />
                </div>

                <div className="col-md-4 mb-3">
                  <label className="form-label">Phone</label>
                  <input type="text" className="form-control" placeholder="Enter your phone number" />
                </div>

                <div className="col-md-4 mb-3">
                  <label className="form-label">Address</label>
                  <input type="text" className="form-control" placeholder="Enter your address" />
                </div>

                <div className="col-md-4 mb-3">
                  <label className="form-label">City</label>
                  <input type="text" className="form-control" placeholder="Enter your city" />
                </div>

                <div className="col-md-4 mb-3">
                  <label className="form-label">Pincode</label>
                  <input type="text" className="form-control" placeholder="Enter your pincode" />
                </div>
              </div>

              <button className="btn btn-secondary mt-2 fw-bold">Place Order</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
