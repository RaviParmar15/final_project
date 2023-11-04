import React from "react";
import "../Css/SinglePage.css";

const SinglePage = () => {
  return (
    <div >
      <div className="Single-Page pading-top">
        <div className="Slider-section">
            <img src="https://india.ray-ban.com/media/catalog/product/cache/31cc5ad256d13496e740487cbcf523ed/8/0/8056597553049_1.jpg" alt="" />
        </div>
        <div className="Content-section">
          <h2>Title</h2>
          <div className="size">
            <h5>Size :</h5>
            <div className="size-box">
              STANDARD <br />
              (53)
            </div>
          </div>
          <div className="color">
            <h4>Color :</h4>
            <h1>Black</h1>
          </div>
          <div className="Products-details">
            <h3>PRODUCT DETAILS :</h3>
            <h6>
              This model brings a retro style with a bold acetate shape to a
              junior look. From classic to contemporary, these colors recall the
              original vibes of the time. Available in classic and gradient
              color combinations, this new squared shape knows how to turn
              heads.
            </h6>
          </div>
          <div className="pyment">
            <div className="mrp">
                <h6>MRP</h6>
            </div>
            <div className="price">
                <h3>₹4,390.00</h3>
            </div>
            <div className="add-to-cart">
                <button>Add to Bag</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
