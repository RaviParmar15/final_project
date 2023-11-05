import axios from "axios"
import { ERROR, LOADING, SUCCESS } from "./ActionType";

export const SunglassFetch = (dispatch)=>{
    dispatch({type:LOADING})
    axios.get("http://localhost:8000/Products")
    .then((res)=>{
        dispatch({type:SUCCESS,payload:res.data})

        console.log(res.data);

    })
    .catch((err)=>{
        console.log(err);
        dispatch({type:ERROR})

        
    });
}