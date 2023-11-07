import React from 'react'
import "../Css/Cart.css"

function Cart() {
  return (
    <div>
        <div className="shop">
            <div className="container">
                <h1>SHOPPING CART</h1>
            </div>
        </div>

        {/* Aviator optics */}

        <div className="cart-product">
           <div className="w-25">
            <p>Product details  </p>
            <div className="imag-box">
                <img src="https://india.ray-ban.com/media/catalog/product/cache/00609e27a53143da3fde220bdda83535/8/0/8053672741841_2.jpg" alt="" />
            </div>
            <div className="content">
                <h4>AVIATOR OPTICS</h4>
                <h4> 0RX6489250055 </h4>
            </div>
           </div>
        
        </div>
    </div>
  )
}

export default Cart
