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

      <h5>
        Fragrances that evoke emotions, spark memories and inspire the senses
      </h5>

      <ul className="product-heading">
        <li>All Categories</li>
        <li className="perfumes">Perfumes</li>
        <li>Body Spray</li>
        <li>Deodorants</li>
      </ul>

      <div className="products">
        <div className="item">
          <div className="pic-background"></div>
          <span>Coco Noir Chanel</span>
          <span>#65,000</span>
          <div>
            <div>
              <span>-</span>
              <span>1</span>
              <span>+</span>
            </div>
            <div>Add to cart</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
