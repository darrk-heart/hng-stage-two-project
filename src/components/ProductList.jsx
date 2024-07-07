import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { FaRegUser, FaFacebook, FaInstagram } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { RiTwitterXFill } from "react-icons/ri";

import logo from "../assets/F.png";
import coco from "../assets/products/coco.png";
import channel from "../assets/products/chanel.png";
import amber from "../assets/products/amber.png";
import cocomadem from "../assets/products/coco madem.png";
import creed from "../assets/products/creed.png";
import dng from "../assets/products/dng.png";
import si from "../assets/products/si.png";
import strong from "../assets/products/stronger.png";
import versace from "../assets/products/versace.png";
import zara from "../assets/products/zara.png";
import zarawonder from "../assets/products/zarawonder.png";
import red from "../assets/products/red.png";
import roberto from "../assets/products/roberto.png";
import ice from "../assets/products/ice cool.png";
import givenchy from "../assets/products/givenchy.png";
import chloe from "../assets/products/chloe.png";

import "./styles.css";

const Header = ({ goToCheckout }) => (
  <div className="productheader">
    <div className="product-header">
      <div className="product-header-first">
        <CiMenuBurger className="menu-icon" />
        <div>
          <input className="input-field" type="text" />
          <CiSearch className="icons" />
        </div>
      </div>
      <img className="logo" src={logo} alt="logo" />
      <div className="product-header-last">
        <FaRegUser className="icons" />
        <GiShoppingCart
          className="icons"
          style={{ cursor: "pointer" }}
          onClick={goToCheckout}
        />
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
    <img className="logo" src={logo} alt="logo" />
    <div>
      <span>Follow us</span>
      <FaFacebook size={20} />
      <RiTwitterXFill size={20} />
      <FaInstagram size={20} />
    </div>
  </div>
);

const ProductItem = ({ name, price, pic }) => {
  const [quantity, setQuantity] = useState(1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="item">
      <div className="pic-background">
        <img src={pic} alt="view" />
      </div>
      <span className="product-name">{name}</span>
      <span className="product-price">{price}</span>
      <div className="item-operations">
        <div>
          <span onClick={decreaseQuantity} style={{ cursor: "pointer" }}>
            -
          </span>
          <span>{quantity}</span>
          <span onClick={increaseQuantity} style={{ cursor: "pointer" }}>
            +
          </span>
        </div>
        <span className="addToCart" style={{ cursor: "pointer" }}>
          Add to cart
        </span>
      </div>
    </div>
  );
};

const ProductList = () => {
  const navigate = useNavigate();
  const goToCheckout = () => {
    navigate("/checkout");
  };

  const products = [
    { name: "Coco Noir Chanel", price: "#65,000", pic: coco },
    { name: "Channel Eau De Parfum", price: "#45,000", pic: channel },
    { name: "Chloe", price: "#37,500", pic: chloe },
    { name: "Creed", price: "#85,000", pic: creed },
    { name: "Zara-Seoul 532-8", price: "#75,000", pic: zara },
    { name: "Versace Eros", price: "#105,000", pic: versace },
    { name: "Stronger with you", price: "#42,700", pic: strong },
    { name: "Roberto Cavalll", price: "#98,000", pic: roberto },
    { name: "Si", price: "#40,000", pic: si },
    { name: "Amber & Orchid", price: "#80,000", pic: amber },
    { name: "Zara wonder rose", price: "#32,000", pic: zarawonder },
    { name: "Red diamond", price: "#68,000", pic: red },
    { name: "Givenchy-Eau de moiselle", price: "#120,000", pic: givenchy },
    { name: "D&G", price: "#75,000", pic: dng },
    { name: "Coco mademoiselle", price: "#95,000", pic: cocomadem },
    { name: "Ice cool vigor-Eau de parfum", price: "#70,000", pic: ice },
  ];

  return (
    <>
      <Header goToCheckout={goToCheckout} />
      <div className="product-list">
        <h5>
          Fragrances that{" "}
          <span style={{ color: "#71360C" }}>
            evoke emotions, spark memories
          </span>{" "}
          and<span style={{ color: "#71360C" }}> inspire the senses</span>
        </h5>

        <ul className="product-heading">
          <li>All Categories</li>
          <li className="perfumes">Perfumes</li>
          <li>Body Spray</li>
          <li>Deodorants</li>
        </ul>

        <div className="products-view">
          {products.map((product, idx) => (
            <ProductItem
              key={idx}
              name={product.name}
              price={product.price}
              pic={product.pic}
            />
          ))}
        </div>
        <Footer />
      </div>
      <div className="tablet-view-footer">
        <div className="follow">
          <div>logo</div>
          <div>
            <span>Follow us</span>
            <FaFacebook size={20} />
            <RiTwitterXFill size={20} />
            <FaInstagram size={20} />
          </div>
        </div>
        <div className="vision">
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
        <div className="info">
          <h4>Information</h4>
          <span>About Us</span>
          <span>Contact Us</span>
        </div>
        <div className="services">
          <h4>Our Services</h4>
          <span>Shipping & Delivery</span>
          <span>Fragrance Recommendation</span>
        </div>
        <div className="account">
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
