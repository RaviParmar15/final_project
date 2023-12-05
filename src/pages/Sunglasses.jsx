import React, { useState } from "react";
import "../Css/Sunglasses.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { SunglassFetch } from "../Redux/ProductsRedux/Action";
import { Link, useSearchParams } from "react-router-dom";

const Sunglasses = () => {
  var { data } = useSelector((store) => store.ProReducers);
  let [search ,setSearch] =useSearchParams();
  const dispatch = useDispatch();
 
  let filter = search.get("category");
  useEffect(() => {
    dispatch(SunglassFetch(filter));
    
  },[search]);


  const handleChange = (e)=>{
    setSearch({sort : e.target.value})
  }
  const handleCategory = (e)=>{
    setSearch({category : e.target.value})
  }
  let sort = search.get("sort");
  // console.log(sort)
  
  
  return (
    <div>
      <div className="pading-50">
        <h1 style={{ paddingBottom: "20px" }}>SUNGLASSES</h1>
        <div className="Sunglass-main-div">
          <div className="filter-main">
            <div className="filter">
              <div className="label-filter">
                <label>Filter By:</label>
              </div>
            </div>
            <div className="select-secton">
              <select onChange={handleCategory}>
                <option className="pro-d">Product Details</option>
                <option className="category" value="">
                  CATEGORY
                </option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kids">Kids</option>
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
              <select onChange={handleChange}>
                <option className="pro-d"> Top Sellers</option>
                <option value="lth" > Price - Low To High</option>
                <option value="htl" >Price - High To Low </option>
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
        }}
      >
        {data.map((e) => {
          return (
            <div key={e.id}>
              <div className="products">
                <Link className="link" to={`./${e.id}`}>
                  <div className="pro-box">
                    <div className="pro-title">
                      <h1>{e.title}</h1>
                    </div>
                    <div className="pro-img">
                      <img src={e.img1} alt="" />
                    </div>
                    <div className="color-price-box">
                      <div className="pro-color">
                        <h3>colors</h3>
                      </div>
                      <div className="pro-price">
                        <h3>₹{e.price}</h3>
                      </div>
                    </div>
                  </div>{" "}
                </Link>
              </div>
              <h1></h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sunglasses;
