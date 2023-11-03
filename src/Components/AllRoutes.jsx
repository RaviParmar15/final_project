import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Eyeglasses  from '../pages/Eyeglasses'
import NewArrivals from '../pages/NewArrivals'
import Sunglasses from '../pages/Sunglasses'
import Prescription from '../pages/Prescription'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'

const AllRoutes = () => {
  return (
    <div>
          <Routes>
            <Route path='/' element={<Home/>}> </Route> 
            <Route path='/Sunglasses' element={<Sunglasses/>}></Route>
            <Route path='/Eyeglasses' element={<Eyeglasses/>}></Route>
            <Route path='/NewArrivals' element={<NewArrivals/>}></Route>
            <Route path='/prescription' element={<Prescription/>}></Route>
            <Route path='/Login' element={<Login/>}></Route>
            <Route path='/Signup' element={<SignUp/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes