import React from 'react'
import "../Css/Sunglasses.css"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { SunglassFetch } from '../Redux/ProductsRedux/Action'

const Sunglasses = () => {

  const {data}= useSelector(store=>store.ProReducers)
  console.log(data);
  const dispatch= useDispatch()

  useEffect(()=>{
    dispatch(SunglassFetch)

  },[])
  return (
    <div>
      {
      //  data.map ((e)=>{
      //   return(
      //     <div>
      //       <h1>{e.title}</h1>
      //     </div>
      //   )
      //  })
      }
      <div className="products">
        <h1 >SUNGLASSES</h1>
        <div className='pro-box'>
        <div className="pro-title">
          <h1>AVIATOR REVERSE</h1>
        </div>
        <div className="pro-img">
          <img src="https://india.ray-ban.com/media/catalog/product/cache/ea9bc4936e2b624aa5046f798e60eb2b/0/r/0rbr0101s_004_cb_000a.jpg" alt="" />
        </div>
        <div className="color-price-box">
        <div className="pro-color">
          <h3>colors</h3>
        </div>
        <div className="pro-price">
          <h3>₹12,000.00</h3>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Sunglasses