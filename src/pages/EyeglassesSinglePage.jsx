import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Swiper from 'swiper';

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const EyeglassesSinglePage = () => {
  const [data2, setData2] = useState("");
  const { id } = useParams();

  const handlecart = () => {
    axios
      .post(`https://firebolt-b3qw.onrender.com/cart`, data2)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(`https://firebolt-b3qw.onrender.com/eyeglasses/${id}`)
      .then((res) => {
        setData2(res.data);
        console.log(id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
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
              <img src={data2.img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={data2.img3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={data2.img4} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="Content-section">
          <h2>{data2.titl}</h2>
          <div className="size">
            <h5>Size :</h5>
            <div className="size-box">
              {data2.size} <br />
            </div>
          </div>
          <div className="color">
            <h4>Color :</h4>
            <h1>{data2.color}</h1>
          </div>
          <div className="Products-details">
            <h3>PRODUCT DETAILS :</h3>
            <h6>{data2.descripation} </h6>
          </div>
          <div className="pyment">
            <div className="mrp">
              <h6>MRP</h6>
            </div>
            <div className="price">
              <h3>₹{data2.price}</h3>
            </div>
            <div className="add-to-cart">
              <button onClick={handlecart}>Add to Bag</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EyeglassesSinglePage;
