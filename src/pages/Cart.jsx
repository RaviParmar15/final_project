import React, { useEffect, useState } from "react";
import "../Css/Cart.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const Cart = () => {
  let [Data,setdata] = useState("");

  let {id} = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/cart`)
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {Data.map((ele)=>(
        <div>
          {ele.title}
        </div>
      ))}
    </div>
  );
};

export default Cart;
