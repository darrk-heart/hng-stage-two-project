import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import "./CartPage.css";

import coco from "../../assets/products/coco.png";
import creed from "../../assets/products/creed.png";
import red from "../../assets/products/red.png";

function CartPage({}) {
  const navigate = useNavigate();
  const goToProductList = () => {
    navigate("/");
  };
  const goToCheckout = () => {
    navigate("/checkout");
  };
  const [quantities, setQuantities] = useState({
    coco: 1,
    red: 1,
    creed: 1,
  });

  const handleIncrement = (product) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product]: prevQuantities[product] + 1,
    }));
  };

  const handleDecrement = (product) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product]: prevQuantities[product] > 1 ? prevQuantities[product] - 1 : 1,
    }));
  };

  return (
    <div>
      <div className="cartpage-header">
        <GrLinkPrevious onClick={goToProductList} />
        <span>Shopping Bag</span>
      </div>
      <div style={{ marginTop: "40px" }}>
        <div className="row">
          <div className="row-first">
            <img src={coco} alt="Coco Noir Chanel" />
          </div>
          <div className="row-second">
            <div className="details">
              <span>Coco Noir Chanel</span>
              <span style={{ fontWeight: "bold" }}>#65,000</span>
              <div>
                <span
                  style={{ paddingLeft: "15%" }}
                  onClick={() => handleDecrement("coco")}
                >
                  -
                </span>
                <span>{quantities.coco}</span>
                <span
                  style={{ paddingRight: "15%" }}
                  onClick={() => handleIncrement("coco")}
                >
                  +
                </span>
              </div>
            </div>
            <div>
              <IoClose />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row-first">
            <img src={red} alt="Red Diamond" />
          </div>
          <div className="row-second">
            <div className="details">
              <span>Red Diamond</span>
              <span style={{ fontWeight: "bold" }}>#68,000</span>
              <div>
                <span
                  style={{ paddingLeft: "15%" }}
                  onClick={() => handleDecrement("red")}
                >
                  -
                </span>
                <span>{quantities.red}</span>
                <span
                  style={{ paddingRight: "15%" }}
                  onClick={() => handleIncrement("red")}
                >
                  +
                </span>
              </div>
            </div>
            <div>
              <IoClose />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row-first">
            <img src={creed} alt="Creed" />
          </div>
          <div className="row-second">
            <div className="details">
              <span>Creed</span>
              <span style={{ fontWeight: "bold" }}>#85,000</span>
              <div>
                <span
                  style={{ paddingLeft: "15%" }}
                  onClick={() => handleDecrement("creed")}
                >
                  -
                </span>
                <span>{quantities.creed}</span>
                <span
                  style={{ paddingRight: "15%" }}
                  onClick={() => handleIncrement("creed")}
                >
                  +
                </span>
              </div>
            </div>
            <div>
              <IoClose />
            </div>
          </div>
        </div>
      </div>
      <div className="beneath">
        <span>Subtotal</span>
        <span>#218,000</span>
      </div>
      <div className="cartpage-footer">
        <div className="view">View Cart</div>
        <div className="checkout">
          <span onClick={goToCheckout}>Checkout</span>
          <GrLinkNext onClick={goToCheckout} />
        </div>
      </div>
    </div>
  );
}

export default CartPage;
