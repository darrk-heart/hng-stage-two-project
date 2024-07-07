import React from "react";
import { useNavigate } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { GiShoppingCart } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

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
        <div>logo</div>
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
      <div className="products-view">
        <div className="products">
          <div className="item">
            <div className="pic-background"></div>
            <span className="product-name">Coco Noir Chanel</span>
            <span className="product-price">#65,000</span>
            <div className="item-operations">
              <div>
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <span className="addToCart">Add to cart</span>
            </div>
          </div>
          <div className="item">
            <div className="pic-background"></div>
            <span className="product-name">Channel Eau De Parfum</span>
            <span className="product-price">#45,000</span>
            <div className="item-operations">
              <div>
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <span className="addToCart">Add to cart</span>
            </div>
          </div>{" "}
          <div className="item">
            <div className="pic-background"></div>
            <span className="product-name">Chloe</span>
            <span className="product-price">#37,500</span>
            <div className="item-operations">
              <div>
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <span className="addToCart">Add to cart</span>
            </div>
          </div>{" "}
          <div className="item">
            <div className="pic-background"></div>
            <span className="product-name">Creed</span>
            <span className="product-price">#85,000</span>
            <div className="item-operations">
              <div>
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <span className="addToCart">Add to cart</span>
            </div>
          </div>
        </div>
        <div className="products">
          <div className="item">
            <div className="pic-background"></div>
            <span className="product-name">Zara-Seoul 532-8</span>
            <span className="product-price">#75,000</span>
            <div className="item-operations">
              <div>
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <span className="addToCart">Add to cart</span>
            </div>
          </div>
          <div className="item">
            <div className="pic-background"></div>
            <span className="product-name">Versace Eros</span>
            <span className="product-price">#105,000</span>
            <div className="item-operations">
              <div>
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <span className="addToCart">Add to cart</span>
            </div>
          </div>{" "}
          <div className="item">
            <div className="pic-background"></div>
            <span className="product-name">Stronger with you</span>
            <span className="product-price">#42,700</span>
            <div className="item-operations">
              <div>
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <span className="addToCart">Add to cart</span>
            </div>
          </div>{" "}
          <div className="item">
            <div className="pic-background"></div>
            <span className="product-name">Roberto Cavalll</span>
            <span className="product-price">#98,000</span>
            <div className="item-operations">
              <div>
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <span className="addToCart">Add to cart</span>
            </div>
          </div>
        </div>
        <div className="products">
          <div className="item">
            <div className="pic-background"></div>
            <span className="product-name">Si</span>
            <span className="product-price">#40,000</span>
            <div className="item-operations">
              <div>
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <span className="addToCart">Add to cart</span>
            </div>
          </div>
          <div className="item">
            <div className="pic-background"></div>
            <span className="product-name">Amber & Orchid</span>
            <span className="product-price">#80,000</span>
            <div className="item-operations">
              <div>
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <span className="addToCart">Add to cart</span>
            </div>
          </div>{" "}
          <div className="item">
            <div className="pic-background"></div>
            <span className="product-name">Zara wonder rose</span>
            <span className="product-price">#32,000</span>
            <div className="item-operations">
              <div>
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <span className="addToCart">Add to cart</span>
            </div>
          </div>{" "}
          <div className="item">
            <div className="pic-background"></div>
            <span className="product-name">Red diamond</span>
            <span className="product-price">#68,000</span>
            <div className="item-operations">
              <div>
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <span className="addToCart">Add to cart</span>
            </div>
          </div>
        </div>
        <div className="products">
          <div className="item">
            <div className="pic-background"></div>
            <span className="product-name">Givenchy-Eau de moiselle</span>
            <span className="product-price">#120,000</span>
            <div className="item-operations">
              <div>
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <span className="addToCart">Add to cart</span>
            </div>
          </div>
          <div className="item">
            <div className="pic-background"></div>
            <span className="product-name">D&G</span>
            <span className="product-price">#75,000</span>
            <div className="item-operations">
              <div>
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <span className="addToCart">Add to cart</span>
            </div>
          </div>{" "}
          <div className="item">
            <div className="pic-background"></div>
            <span className="product-name">Coco mademoiselle</span>
            <span className="product-price">#95,000</span>
            <div className="item-operations">
              <div>
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <span className="addToCart">Add to cart</span>
            </div>
          </div>{" "}
          <div className="item">
            <div className="pic-background"></div>
            <span className="product-name">Ice cool vigor-Eau de parfum</span>
            <span className="product-price">#70,000</span>
            <div className="item-operations">
              <div>
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <span className="addToCart">Add to cart</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product-footer">
        <div>logo</div>
        <div>
          <span>Follow us</span>
          <FaFacebook size={20} />
          <RiTwitterXFill size={20} />
          <FaInstagram size={20} />
        </div>
      </div>
    </div>
  );
}

export default ProductList;
