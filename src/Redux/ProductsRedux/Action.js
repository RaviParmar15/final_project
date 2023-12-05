import axios from "axios"
import { ERROR, LOADING, SUCCESS } from "./ActionType";

export const SunglassFetch = (filter)=> (dispatch) => {
    console.log(filter)
    dispatch({ type: LOADING })
    if(filter){
    axios.get(`https://firebolt-b3qw.onrender.com/Product?category=${filter}`)
        .then((res) => {
            console.log(res.data)
            dispatch({ type: SUCCESS, payload: res.data })

        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: ERROR })


        });
    }else{
        axios.get(`https://firebolt-b3qw.onrender.com/Product`)
        .then((res) => {
            console.log(res.data)
            dispatch({ type: SUCCESS, payload: res.data })

        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: ERROR })


        });
    }
}
export const EyeglassesFetch= (filter)=>(dispatch)=>{
    dispatch({ type: LOADING })
    if(filter){
    axios.get(`https://firebolt-b3qw.onrender.com/eyeglasses?category=${filter}`)
    .then((res) => {
        // console.log(res.data);
        dispatch({ type: SUCCESS, payload: res.data })

    })
    .catch((err) => {
        dispatch({ type: ERROR })

    });
}else{
    axios.get(`https://firebolt-b3qw.onrender.com/eyeglasses`)
    .then((res) => {
        // console.log(res.data);
        dispatch({ type: SUCCESS, payload: res.data })

    })
    .catch((err) => {
        dispatch({ type: ERROR })

    });
}
}