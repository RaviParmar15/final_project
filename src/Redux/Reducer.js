import { LOGIN, SIGNUP } from "./ActionType";

 let intialstate ={
    user:[],
    isSignup:false,
 } 



 export const reducer =(state=intialstate,action)=>{
    switch (action.type) {
        case LOGIN:
            return{
                ...state,
                isSignup: true,

            }
            case SIGNUP:
                return{
                    ...state,
                    user:action.payload,
                    isSignup: false,

                }
            
            break;
    
        default: return state
            break;
    }
}