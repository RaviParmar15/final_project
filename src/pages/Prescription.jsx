import React from 'react'
import "../Css/Prescription.css"

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
        <div className='btn'>
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
    </div>

  )
}       

export default Prescription
