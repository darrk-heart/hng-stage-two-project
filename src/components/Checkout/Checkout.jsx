import React from "react";
import { GrLinkPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

import "./Checkout.css";

function Checkout() {
  const navigate = useNavigate();
  const goToCartPage = () => {
    navigate("/cartpage");
  };
  return (
    <div>
      <div className="checkout-header">
        <GrLinkPrevious onClick={goToCartPage} style={{ cursor: "pointer" }} />
        <span>Checkout</span>
        <span style={{ color: "white" }}>he</span>
      </div>
      <div className="checkout-content">
        <span>Delivery address</span>
        <input type="text" value="2 Tomopolo St. Ajah, Lagos" />
        <span>Name</span>
        <input type="text" value="James Sandra" />
        <span>Phone No</span>
        <input type="text" value="09054234467" />
      </div>
      <div className="payment-summary">Payment Summary</div>
      <div className="summary">
        <div>
          <span>Subtotal</span>
          <span>Transaction Fees</span>
          <span>Delivery</span>
          <span>Total</span>
        </div>
        <div>
          <span>#218,000</span>
          <span>#5,750</span>
          <span>#3,550</span>
          <span>#227,300</span>
        </div>
      </div>
      <div className="payment">
        <span className="pay">Make Payment</span>
      </div>
    </div>
  );
}

export default Checkout;
