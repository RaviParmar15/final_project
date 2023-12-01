import React, { useEffect, useState } from "react";
import "../Css/Cart.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const Cart = () => {
  let [Data,setdata] = useState([]);

  let {id} = useParams();

  useEffect(() => {
    axios
      .get(`https://firebolt-b3qw.onrender.com/cart`)
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
       <div className="title">
          <h1 style={{padding:"50px 0px"}}>SHOPPING CART</h1>
        </div>
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
      {Data.map((ele)=>(
        <div className="cart-main">
        <div className="product-main">
          <div className="product-detail">
            <div className="product-detail-sub">
              <div className="product-img">
                <div className="product-img-sub">
                  <img
                    src={ele.img1}
                    alt=""
                  />
                </div>
              </div>
              <div className="product-name">
                <div className="product-name-sub">
                  <h1>{ele.title}</h1>
                  <div className="product-desc">
                    <h6>
                      Size : <span>{ele.size}</span>
                    </h6>
                    <h6>
                      Frame : <span>{ele.color}</span>
                    </h6>
                    <h6>
                      Temple : <span></span>
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
                <p>₹ {ele.price}</p>
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
