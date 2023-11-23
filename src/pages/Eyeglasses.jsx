import React, { useEffect } from 'react'
import "../Css/Sunglasses.css";

import { useDispatch, useSelector } from 'react-redux';
import { EyeglassesFetch } from '../Redux/ProductsRedux/Action';
import { Link } from 'react-router-dom';

const Eyeglasses = () => {
  const {data } = useSelector((store) => store.ProReducers);
  console.log(data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(EyeglassesFetch);
  },[]);
  return (
    <div>
       <div className="pading-50">
        <h1 style={{ paddingBottom: "20px" }}>EYEGLASSES</h1>
        <div className="Sunglass-main-div">
          <div className="filter-main">
            <div className="filter">
              <div className="label-filter">
                <label>Filter By:</label>
              </div>
            </div>
            <div className="select-secton">
              <select>
                <option className="pro-d">Product Details</option>
                <option className="category" value="">
                  CATEGORY
                </option>
                <option value="">Men</option>
                <option value="">Women</option>
                <option value="">Kids</option>
              </select>
            </div>
          </div>
          <span className="border"></span>
          <div className="filter-main">
            <div className="filter">
              <div className="label-filter">
                <label>SORT BY:</label>
              </div>
            </div>
            <div className="select-secton">
              <select>
                <option className="pro-d"> Top Sellers</option>
                <option value=""> Price - Low To High</option>
                <option value="">Price - High To Low </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "15px",
        margin: "30px",
      }}>
      {data.map((ele) => {
          return (
            <div key={ele.id}>
              <div className="products">
                <Link className="link" to={`./${ele.id}`}>
                  <div className="pro-box">
                    <div className="pro-title">
                      <h1>{ele.titl}</h1>
                    </div>
                    <div className="pro-img">
                      <img src={ele.img1} alt="" />
                    </div>
                    <div className="color-price-box">
                      <div className="pro-color">
                        <h3>colors</h3>
                      </div>
                      <div className="pro-price">
                        <h3>₹{ele.price}</h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <h1></h1>
            </div>
          );
        })}
        </div>
    </div>
  )
}

export default Eyeglasses