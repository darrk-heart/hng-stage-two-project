import React from "react";
import { useNavigate } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { GiShoppingCart } from "react-icons/gi";
import "./styles.css";

function ProductList() {
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="product-list">
      <div className="product-header">
        <div className="product-header-first">
          <CiMenuBurger />
          <div>
            <CiSearch />
          </div>
        </div>
        <div></div>
        <div className="product-header-last">
          <FaRegUser />
          <GiShoppingCart onClick={goToCheckout} />
        </div>
      </div>
    </div>
  );
}

export default ProductList;
