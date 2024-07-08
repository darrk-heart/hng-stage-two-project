import React from "react";
import { GrLinkPrevious } from "react-icons/gr";

import "./Checkout.css";

function Checkout() {
  return (
    <div>
      <div className="checkout-header">
        <GrLinkPrevious />
        <span>Checkout</span>
        <span style={{ color: "white" }}>hello</span>
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
      <div className="payment">Make Payment</div>
    </div>
  );
}

export default Checkout;
