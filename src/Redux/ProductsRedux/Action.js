import axios from "axios"
import { ERROR, LOADING, SUCCESS } from "./ActionType";

export const SunglassFetch = (dispatch) => {
    dispatch({ type: LOADING })
    axios.get("https://firebolt-b3qw.onrender.com/Product")
        .then((res) => {
            dispatch({ type: SUCCESS, payload: res.data })

        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: ERROR })


        });
}
export const EyeglassesFetch=(dispatch)=>{
    dispatch({ type: LOADING })
    axios.get(" https://firebolt-b3qw.onrender.com/eyeglasses")
    .then((res) => {
        // console.log(res.data);
        dispatch({ type: SUCCESS, payload: res.data })

    })
    .catch((err) => {
        dispatch({ type: ERROR })

    });
}