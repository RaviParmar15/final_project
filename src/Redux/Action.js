import { LOGIN, SIGNUP } from "./ActionType"

export const login=()=>{
    return{
        type:LOGIN,
    }

}
export const signup=(data)=>{
    return{
        type:SIGNUP,
        payload:data

    }
}