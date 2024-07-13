import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { FaRegUser, FaFacebook, FaInstagram } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { RiTwitterXFill } from "react-icons/ri";
import logo from "../../assets/F.png"; // Default image if no product image is available
import "./ProductList.css";

const Header = ({ goToCartPage }) => (
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
          onClick={goToCartPage}
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
          <span
            onClick={decreaseQuantity}
            style={{ cursor: "pointer", paddingLeft: "15%" }}
          >
            -
          </span>
          <span>{quantity}</span>
          <span
            onClick={increaseQuantity}
            style={{ cursor: "pointer", paddingRight: "15%" }}
          >
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
  const goToCartPage = () => {
    navigate("/cartpage");
  };

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "/api/products/?organization_id=01f381637a7143b8b796fff6c390acbd&reverse_sort=false&page=1&size=10&Appid=" +
            process.env.REACT_APP_APPID +
            "&Apikey=" +
            process.env.REACT_APP_APIKEY,
          { method: "GET" }
        );
        const data = await response.json();
        setProducts(data.items);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Header goToCartPage={goToCartPage} />
      <div className="product-list">
        <h5>
          Fragrances that{" "}
          <span style={{ color: "#71360C" }}>
            evoke emotions, spark memories
          </span>{" "}
          and
          <span style={{ color: "#71360C" }}> inspire the senses</span>
        </h5>

        <ul className="product-heading">
          <li>All Categories</li>
          <li className="perfumes">
            <span style={{ cursor: "pointer" }}>Perfumes</span>
          </li>
          <li>Body Spray</li>
          <li>Deodorants</li>
        </ul>

        {error && <p>Error fetching products: {error}</p>}
        <div className="products-view">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              name={product.name}
              price={product.selling_price || "Price not available"}
              pic={product.product_image[0] || logo} // Replace with default image if no image is available
            />
          ))}
        </div>
        <Footer />
      </div>
      <div className="tablet-view-footer">
        <div className="follow">
          <div>
            <img className="logos" src={logo} alt="logo" />
          </div>
          <div>
            <span>Follow us</span>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "10px",
                alignItems: "center",
              }}
            >
              <FaFacebook style={{ paddingRight: "10px" }} size={20} />
              <RiTwitterXFill style={{ paddingRight: "10px" }} size={21} />
              <FaInstagram style={{ paddingRight: "10px" }} size={21} />
            </div>
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
          <span>
            Fragrance
            <br /> Recommendation
          </span>
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
