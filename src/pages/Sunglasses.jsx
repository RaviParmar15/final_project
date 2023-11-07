import React, { useState } from "react";
import "../Css/Sunglasses.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { SunglassFetch } from "../Redux/ProductsRedux/Action";
import { Link, useSearchParams } from "react-router-dom";

const Sunglasses = () => {
  const { data } = useSelector((store) => store.ProReducers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SunglassFetch);
  },[]);

  let [search ,setSearch] =useSearchParams();
  let sort = search.get("sort");

  if(sort== "htl"){
    data.sort((a,c)=> a.price - c.price)
  }
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
                <option value="" onClick={()=>setSearch({sort:"lth"})}> Price - Low To High</option>
                <option value="" onClick={()=>setSearch({sort:"htl"})}>Price - High To Low </option>
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
