import React from 'react'
import "../Css/Prescription.css"
import "../Css/Home.css"
import { FaEnvelope, FaInstagram, FaPinterest, FaPinterestP, FaTwitter } from 'react-icons/fa6'
import { BiLogoFacebook } from 'react-icons/bi'
import { TfiYoutube } from 'react-icons/tfi'
import { Link } from 'react-router-dom'

const Prescription = () => {
  return (
    <div>
      <div className='img-box'>
        <img src="https://india.ray-ban.com/media/wysiwyg/rb_mb_prescription/23_RB_Website_Prescription_CLP_Banner_Desktop.jpg" alt="" />
      </div>

      {/* description section  */}

      <div className='descri'>
        <h1>Add Prescription Lenses to your favorite
          <br />
          Ray-Ban sunglasses and eyeglasses,
          <br />
          At a store near you!
        </h1>
        <div className='btnn'>
        <button><img src="https://img.icons8.com/ios-filled/50/000000/marker.png" alt="" />FIND A STORE</button>
        </div>
      </div>


      {/* Experience section */}

      <div className='img-box2'>
        <img src="https://india.ray-ban.com/media/wysiwyg/Rb-M-sunglasses_clp_opti/Prescription-Page-03_REFERNCE_-1920x560px.jpg" alt="" />
      </div>

      <div className='centered'>
        WHY RAY-BAN
        <sup>®</sup>
        AUTHENTIC PRESCRIPTION LENSES
      </div>

      <div className='ray-ban'>
        <img src="https://india.ray-ban.com/media/wysiwyg/Rb-M-sunglasses_clp_opti/Prescription-Page-04-1810x500px.jpg" alt="" />
      </div>

      {/* lencs section */}

     <div className="main">
     <div className='img-box-3'>
        <img src="https://india.ray-ban.com/media/wysiwyg/Rb-M-sunglasses_clp_opti/Prescription-Page-05-900x500px.jpg" alt="" />
      </div>
      <div className='imgbox-4'>
      <img src="https://india.ray-ban.com/media/wysiwyg/Rb-M-sunglasses_clp_opti/Prescription-Page-06-900x500px.jpg" alt="" />
      </div>
     </div>


     {/* img */}


     <div className="main">
     <div className='img-box-5'>
        <img src="https://india.ray-ban.com/media/wysiwyg/Rb-M-sunglasses_clp_opti/Prescription-Page-07-900x500px.jpg" alt="" />
      </div>
      <div className='imgbox-6'>
      <img src="https://india.ray-ban.com/media/wysiwyg/Rb-M-sunglasses_clp_opti/Prescription-Page-08-900x500px.jpg" alt="" />
      </div>
     </div>

     {/* img */}

        
     <div className="main">
     <div className='img-box-7'>
        <img src="https://india.ray-ban.com/media/wysiwyg/Rb-M-sunglasses_clp_opti/Prescription-Page-09-900x500px.jpg " alt="" />
      </div>
      <div className='imgbox-8'>
      <img src="https://india.ray-ban.com/media/wysiwyg/Rb-M-sunglasses_clp_opti/Prescription-Page-10-900x500px.jpg" alt="" />
      </div>
     </div>

     {/* Authentic colors */}

     <div className="color-img-box">
      <img src="https://india.ray-ban.com/media/wysiwyg/Rb-M-sunglasses_clp_opti/Prescription-Page-11-1810x500px.jpg" alt="" />
     </div>

     {/* footer section */}

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
          <i><FaPinterest/></i>
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

  )
}       

export default Prescription
