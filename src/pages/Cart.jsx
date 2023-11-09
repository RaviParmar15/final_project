import React, { useEffect, useState } from "react";
import "../Css/Cart.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const Cart = () => {
  let [Data,setdata] = useState("");

  let {id} = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/cart`)
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {Data.map((ele)=>(
        <div className="cart-main">
        <div className="title">
          <h1>SHOPPING CART</h1>
        </div>
        <div className="product-main">
          <div className="heading">
            <div className="product-heading">
              <p>Product details</p>
            </div>
            <div className="other-heading">
              <p>Quantity</p>
              <p>Delivery Date</p>
              <p>Price</p>
            </div>
          </div>
          <div className="product-detail">
            <div className="product-detail-sub">
              <div className="product-img">
                <div className="product-img-sub">
                  <img
                    src="https://india.ray-ban.com/media/catalog/product/cache/ea9bc4936e2b624aa5046f798e60eb2b/8/0/8056597662192_1_2.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="product-name">
                <div className="product-name-sub">
                  <h1>AVIATOR REVERSE</h1>
                  <div className="product-desc">
                    <h6>
                      Size : <span>59</span>
                    </h6>
                    <h6>
                      Frame : <span>Pilot</span>
                    </h6>
                    <h6>
                      Temple : <span>145</span>
                    </h6>
                  </div>
                </div>
                <div className="product-remove">
                  <p>Remove</p>
                </div>
              </div>
            </div>
            <div className="product-other-detail">
              <div className="product-qty">
                <p>+ 1 -</p>
              </div>
              <div className="product-delivery">
                <p>
                  Estimated Delivery Date <span>Fri Nov 10</span>
                </p>
              </div>
              <div className="product-price">
                <p>$ 12,490.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Cart;
