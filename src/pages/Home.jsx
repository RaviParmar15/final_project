import React from "react";
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Navigation } from "swiper/modules";
import { FaEnvelope,FaTwitter,FaInstagram,FaPinterestP } from "react-icons/fa6";
import { BiLogoFacebook } from "react-icons/bi";
import { TfiYoutube } from "react-icons/tfi";



import "../Css/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="slider">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <img
              src="https://india.ray-ban.com/media/wysiwyg/banner-5sep.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://india.ray-ban.com/media/wysiwyg/kids-bnr.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://india.ray-ban.com/media/wysiwyg/Rb_home_opti/RB_Website_Aviator_Reverse_Desktop_Banner_-_1920x800px.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://india.ray-ban.com/media/wysiwyg/Rb_home_opti/RB_Website_Wayfarer_Reverse_Desktop_Banner_-_1920x800px.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://india.ray-ban.com/media/wysiwyg/Rb_home_opti/01_HomePage_Hero_Banner_Desktop_-_1920x800px.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* section-2  */}
      <div className="pading-top">
        <div className="gift">
          <h1>GIFT GUIDE SHORT CUT</h1>
          <p>Use the badges below to our browse our most-popular selections.</p>
        </div>
        <div className="w-100">
          <div className="w-20">
            <div className="img-border">
              <img
                src="https://india.ray-ban.com/media/wysiwyg/Rb_Gift_guide_page/08.jpg"
                alt=""
              />
            </div>
            <h4>ICONIC</h4>
          </div>
          <div className="w-20">
            <div className="img-border">
              <img
                src="https://india.ray-ban.com/media/wysiwyg/Rb_Gift_guide_page/09.jpg"
                alt=""
              />
            </div>
            <h4>TRENDING</h4>
          </div>
          <div className="w-20">
            <div className="img-border">
              <img
                src="https://india.ray-ban.com/media/wysiwyg/Rb_Gift_guide_page/10.jpg"
                alt=""
              />
            </div>
            <h4>ESSENTIAL</h4>
          </div>
          <div className="w-20">
            <div className="img-border">
              <img
                src="https://india.ray-ban.com/media/wysiwyg/Rb_Gift_guide_page/11.jpg"
                alt=""
              />
            </div>
            <h4>SOMETHING SPECIAL</h4>
          </div>
          <div className="w-20">
            <div className="img-border">
              <img
                src="https://india.ray-ban.com/media/wysiwyg/Rb_Gift_guide_page/12.jpg"
                alt=""
              />
            </div>
            <h4>ADVANCED LENSES</h4>
          </div>
        </div>
      </div>

      {/* section-3  */}
      <div className="section-3 pading-top">
        <div className="w-50">
          <img
            src="https://india.ray-ban.com/media/wysiwyg/Rb_home_opti/03_HomePage_Sunglasses_Banner_Desktop_-_930x945px.jpg"
            alt=""
          />
        </div>
        <div className="w-50">
          <img
            src="https://india.ray-ban.com/media/wysiwyg/Rb_home_opti/05_HomePage_Sunglasses_Banner_Desktop_-_930x945px.jpg"
            alt=""
          />
        </div>
      </div>

      {/* section-4  */}
      <div className="section-4 pading-top">
        <div className="heading">
          <h3>OUR RISING STARS</h3>
          <p>Meet the next generation of Ray-Ban Icons</p>
        </div>
        <div className="gogls">
          <div className="w-25">
            <img
              src="https://india.ray-ban.com/media/wysiwyg/Rb_home_opti/STATE_STREET.png"
              alt=""
            />
            <h6>STATE STREET</h6>
          </div>
          <div className="w-25">
            <img
              src="https://india.ray-ban.com/media/wysiwyg/Rb_home_opti/CARIBBEAN.png"
              alt=""
            />
            <h6>CARIBBEAN</h6>
          </div>
          <div className="w-25">
            <img
              src="https://india.ray-ban.com/media/wysiwyg/Rb_home_opti/NOMAD.png"
              alt=""
            />
            <h6>NOMAD</h6>
          </div>
          <div className="w-25">
            <img
              src="https://india.ray-ban.com/media/wysiwyg/Rb_home_opti/JOHN.png"
              alt=""
            />
            <h6>JOHN</h6>
          </div>
        </div>
      </div>
      {/* section-5  */}

      <div className="section-5 pading-top">
        <div>
          <h3>MOST POPULAR</h3>
        </div>
        <div className="w-100 pading-50">
          <div className="w-25">
            <img
              src="https://india.ray-ban.com/media/wysiwyg/Rb_home_opti/805289602057_render1-min.png"
              alt=""
            />
            <h6>AVIATOR CLASSIC</h6>
          </div>
          <div className="w-25">
            <img
              src="https://india.ray-ban.com/media/wysiwyg/Rb_home_opti/805289126577_render1-min.png"
              alt=""
            />
            <h6>ORIGINAL WAYFARER CLASSIC</h6>
          </div>
          <div className="w-25">
            <img
              src="https://india.ray-ban.com/media/wysiwyg/Rb_home_opti/805289653653_render1-min.png"
              alt=""
            />
            <h6>CLUBMASTER CLASSIC</h6>
          </div>
          <div className="w-25">
            <img
              src="https://india.ray-ban.com/media/wysiwyg/Rb_home_opti/805289742470_render1-min.png"
              alt=""
            />
            <h6>ERIKA CLASSIC</h6>
          </div>
        </div>
      </div>

      {/* section-6  */}
      <div className="section-6 pading-top">
        <div className="w-100">
          <div className="w-50 titanium">
            <img
              src="https://india.ray-ban.com/media/wysiwyg/Rb_home_opti/07_RB_Website_HomePage_Titanium_Banner_Desktop.jpg"
              alt=""
            />
            <span>
              TITANIUM COLLECTION <br />
              MADE IN JAPAN.
            </span>
            <br />
            <small>
              Even lighter,even stronger,equally timeless. <br />
              Discover our collection made in Japan.{" "}
            </small>
            <br />
            <button>Shop Titanium</button>
          </div>
          <div className="w-50 titanium">
            <img
              src="https://india.ray-ban.com/media/wysiwyg/main-bnr.jpg"
              alt=""
            />
            <span>
              GenZ Collection <br />{" "}
            </span>
            <br />
            <small>
              Bold, Bright and Bio-Based* <br />
              Our most colorful collection yet.{" "}
            </small>
            <br />
            <button>Shop Genz Collections</button>
          </div>
        </div>
      </div>

      {/* footer-section  */}

      <footer className="pading-top">
        <div className="footer " style={{backgroundColor:"#333333"}}>
        <div className="input">
          <div>
            <h2>
              <FaEnvelope  /> SIGN UP TO OUR MAILING LIST TO STAY ONE STEP AHEAD.
            </h2>
          </div>
          <div className="i-b">
            <input type="text" placeholder="Enter Your Email" />
            <button>SIGN UP</button>
          </div>
        </div>
        <p>
          By clicking sign up, I confirm that I am over 18 years old and I agree
          that my email address can be used by Luxottica S.p.A. to send me
          exclusive offers, contents, news and other marketing communication as
          a member of the Ray-Ban
        </p>
        </div>
        <div className="social-icon" style={{backgroundColor:" "}}>
          <div className="s-icon">
         <i><BiLogoFacebook/></i> 
         <i><FaTwitter/></i>
          <i><FaInstagram/></i>
          <i><FaPinterestP/></i>
          <i><TfiYoutube/></i>
          </div>
        </div>
        <div>
          <div className="main-footer-bar">
          <div className="flag-img">
            <img src="https://img.freepik.com/free-vector/illustration-india-flag_53876-27130.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698710400&semt=ais" alt="" />
          </div>
          <div className="footer-bar">
            <Link className="f-l">INDIA </Link>
            <Link className="f-l">How Can we Help </Link>
            <Link className="f-l">Contact Us</Link>
            <Link className="f-l">Order Status Inquiry?- </Link>
          </div>
          </div>
          <div className="payment">
            <div>
              <h3> WE GUARANTEE EVERY TRANSACTION IS 100% SECURE</h3>
            </div>
            <div className="pyment-option">
              <img src="https://india.ray-ban.com/static/version1698669719/frontend/Aceturtle/Rayban_new/en_US/images/ray_sprite_payment_method.png" alt="" />
            </div>
          </div>
          <div className="p">
            <p>Pictures and images on this website are for illustration purposes only. No qualities or characteristics of the products depicted herein could be inferred from the relevant pictures. Certain activities undertaken by Luxottica Group S.p.A. may be licensed under US Patent No. 6,624,843. Copyright ©2019 Luxottica Group S.p.A. - All Rights Reserved</p>
          </div>
          <div className="copyright" style={{backgroundColor:"#6e716e"}}>
            <span style={{color:"white" ,fontWeight:"600"}}>Copyright ©2020 Luxottica group. All Rights Reserved</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;