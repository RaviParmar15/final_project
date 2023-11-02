import React from 'react'
import '../Css/Login.css';
import '../Css/Home.css';
import { BiLogoFacebook } from 'react-icons/bi';
import { FaEnvelope, FaInstagram, FaPinterestP, FaTwitter } from 'react-icons/fa6';
import { TfiYoutube } from 'react-icons/tfi';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div >
        <div className='main-div'>
        <div className='Login container'>
            <h1>Create Account</h1>
            <div className='form'>
            <form>
                <label>Name</label>
                <br />
                <input type="text" />
                <br /><br />
                <label >E-mail address</label>
                <br />
                <input type="email" />
                <br />
                <br />
                <label >Password</label>
                <br />
                <input type="password"/>

            </form>
            
            </div>
            <div className="forget">
                {/* <span><a href="">Forgot Password?</a></span> */}
                
            </div>
            <div className='btn'>
                <button>Signup</button>

                </div>
                <div className='created-ac'>
                    <h3>Not a member?  Already a member? LOGIN</h3>
                </div>
        </div>
        <div className='popular-link container'>
            <h5>popular links</h5>
            <h6>Login /Register</h6>
            <h6>my order</h6>
            <h6>my retunes</h6>
            <h6>CHECK GIFT CARD BALANCE </h6>
            <h6></h6>
        </div>
        </div>
        <footer className="pading-top">
        <div className="footer " style={{backgroundColor:"#333333"}}>
        <div className="input">
          <div>
            <h2>
              <FaEnvelope /> SIGN UP TO OUR MAILING LIST TO STAY ONE STEP AHEAD.
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
  )
}

export default SignUp