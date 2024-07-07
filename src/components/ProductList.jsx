import React from "react";
import { useNavigate } from "react-router-dom";
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { FaRegUser, FaFacebook, FaInstagram } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { RiTwitterXFill } from "react-icons/ri";

import "./styles.css";

const Header = ({ goToCheckout }) => (
  <div className="productheader">
    <div className="product-header">
      <div className="product-header-first">
        <CiMenuBurger className="menu-icon" />
        <div>
          <CiSearch />
        </div>
      </div>
      <div>logo</div>
      <div className="product-header-last">
        <FaRegUser />
        <GiShoppingCart onClick={goToCheckout} />
      </div>
    </div>
    <div className="tablet-view-menu">
      <span>About Us</span>
      <span>Brands</span>
      <span>Sales & Offers</span>
      <span>Wholesale</span>
      <span>FAQ</span>
    </div>
  </div>
);

const Footer = () => (
  <div className="product-footer">
    <div>logo</div>
    <div>
      <span>Follow us</span>
      <FaFacebook size={20} />
      <RiTwitterXFill size={20} />
      <FaInstagram size={20} />
    </div>
  </div>
);

const ProductItem = ({ name, price }) => (
  <div className="item">
    <div className="pic-background"></div>
    <span className="product-name">{name}</span>
    <span className="product-price">{price}</span>
    <div className="item-operations">
      <div>
        <span>-</span>
        <span>1</span>
        <span>+</span>
      </div>
      <span className="addToCart">Add to cart</span>
    </div>
  </div>
);

const ProductList = () => {
  const navigate = useNavigate();
  const goToCheckout = () => {
    navigate("/checkout");
  };

  const products = [
    { name: "Coco Noir Chanel", price: "#65,000" },
    { name: "Channel Eau De Parfum", price: "#45,000" },
    { name: "Chloe", price: "#37,500" },
    { name: "Creed", price: "#85,000" },
    { name: "Zara-Seoul 532-8", price: "#75,000" },
    { name: "Versace Eros", price: "#105,000" },
    { name: "Stronger with you", price: "#42,700" },
    { name: "Roberto Cavalll", price: "#98,000" },
    { name: "Si", price: "#40,000" },
    { name: "Amber & Orchid", price: "#80,000" },
    { name: "Zara wonder rose", price: "#32,000" },
    { name: "Red diamond", price: "#68,000" },
    { name: "Givenchy-Eau de moiselle", price: "#120,000" },
    { name: "D&G", price: "#75,000" },
    { name: "Coco mademoiselle", price: "#95,000" },
    { name: "Ice cool vigor-Eau de parfum", price: "#70,000" },
  ];

  return (
    <>
      <Header goToCheckout={goToCheckout} />
      <div className="product-list">
        <h5>
          Fragrances that evoke emotions, spark memories and inspire the senses
        </h5>

        <ul className="product-heading">
          <li>All Categories</li>
          <li className="perfumes">Perfumes</li>
          <li>Body Spray</li>
          <li>Deodorants</li>
        </ul>

        <div className="products-view">
          {products.map((product, idx) => (
            <ProductItem key={idx} name={product.name} price={product.price} />
          ))}
        </div>
        <Footer />
      </div>
      <div className="tablet-view-footer">
        <div>
          <div>logo</div>
          <div>
            <span>Follow us</span>
            <FaFacebook size={20} />
            <RiTwitterXFill size={20} />
            <FaInstagram size={20} />
          </div>
        </div>
        <div>
          <h4>Our Vision</h4>
          <span>
            Fragrance Fusion is dedicated to providing <br />
            an exceptional perfume shopping <br />
            experience, offering a curated selection of <br />
            premium fragrances from around the world. <br />
            We aim to inspire our customers to discover <br />
            new scents and explore their personal style
          </span>
        </div>
        <div>
          <h4>Information</h4>
          <span>About Us</span>
          <span>Contact Us</span>
        </div>
        <div>
          <h4>Our Services</h4>
          <span>Shipping & Delivery</span>
          <span>Fragrance Recommendation</span>
        </div>
        <div>
          <h4>My Account</h4>
          <span>My Profile</span>
          <span>My Cart</span>
          <span>Checkout</span>
          <span>Track Order</span>
        </div>
      </div>
    </>
  );
};

export default ProductList;
