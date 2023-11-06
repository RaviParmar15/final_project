import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { EyeglassesFetch } from '../Redux/ProductsRedux/Action';

const Eyeglasses = () => {
  const {data } = useSelector((store) => store.ProReducers);
  console.log(data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(EyeglassesFetch);
  },[]);
  return (
    <div>
      {
        data.map((ele)=>{
          <div>
            <h1>{ele.titl}</h1>
          </div>
        })
      }
    </div>
  )
}

export default Eyeglasses