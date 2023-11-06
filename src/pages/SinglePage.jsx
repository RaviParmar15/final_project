import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import "../Css/SinglePage.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const SinglePage = () => {

  const [data,setData]= useState("");
  const {id} = useParams();
  console.log(id);

  useEffect(()=>{
    axios.get(`http://localhost:8000/Products/${id}`)
    .then((res)=>{
      setData(res.data)

    })
    .catch((err)=>{

    });

  },[]);
  return (
    <div >
      <div className="Single-Page pading-top">
        <div className="Slider-section">
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src={data.img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={data.img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={data.img4} alt="" />
        </SwiperSlide>
      </Swiper>
        </div>
        <div className="Content-section">
          <h2>{data.title}</h2>
          <div className="size">
            <h5>Size :</h5>
            <div className="size-box">
              {data.size} <br />
            
            </div>
          </div>
          <div className="color">
            <h4>Color :</h4>
            <h1>{data.color}</h1>
          </div>
          <div className="Products-details">
            <h3>PRODUCT DETAILS :</h3>
            <h6>{data.description} </h6>
          </div>
          <div className="pyment">
            <div className="mrp">
                <h6>MRP</h6>
            </div>
            <div className="price">
                <h3>₹{data.price}</h3>
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
