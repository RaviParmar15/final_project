import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import '../Css/NavBar.css'
import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";

const NavBar = () => {
  return (
    <div>
         <div className='topBar'>
       <span> <TbTruckDelivery className='truck '/>  Ray-Ban® Official Store India :</span>
      </div>
    <div className='main-div'>
      <div className='logo'>
      <Link to="/">
          <img src="https://india.ray-ban.com/static/version1698669719/frontend/Aceturtle/Rayban_new/en_US/images/logo.svg" alt="" />
      </Link>
      </div>
      <div className='nav-bars'>
      <Link to="/Sunglasses" className='link'>Sunglasses
       </Link>
      <Link to="/Eyeglasses" className='link'>Eyeglasses </Link>
      <Link to="/NewArrivals" className='link'>New Arrivals </Link>
      <Link to="/prescription" className='link'>Prescription</Link>
      <Link  className='link' style={{color:"#e80c00"}}>Promo</Link>
      </div>
      <div className="icons">

        <Link  className='search-icon'><FiSearch/></Link>
        <Link className='search-icon'><AiOutlineHeart/></Link>
        <Link to="/cart" className='search-icon'><BsHandbag/></Link>
        <Link to="Login" className='search-icon'><BiUser/></Link>


      </div>

      
    </div>
    </div>
  )
}

export default NavBar