import axios from "axios"
import { ERROR, LOADING, SUCCESS } from "./ActionType";

export const SunglassFetch = (dispatch) => {
    dispatch({ type: LOADING })
    axios.get("http://localhost:8000/Products")
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
    axios.get(" http://localhost:8000/eyeglasses")
    .then((res) => {
        // console.log(res.data);
        dispatch({ type: SUCCESS, payload: res.data })

    })
    .catch((err) => {
        dispatch({ type: ERROR })

    });
}