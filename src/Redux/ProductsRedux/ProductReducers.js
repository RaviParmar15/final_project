import { ERROR, LOADING, SUCCESS } from "./ActionType";

let intialstate={
    isLoading: false,
    isError: false,
    data:[]
}

export const ProReducers =(state=intialstate,action,payload)=>{
    // console.log(action.payload);

    switch (action.type) {
        case LOADING:
            return{
                ...state,
                isLoading: true,
            }
            case SUCCESS:
                return{
                    ...state,
                    isLoading: false,
                    data:action.payload
                }
                case ERROR:
                    return{
                        ...state,
                        isError: true,
                    }
            
            break;
    
        default: return state
            break;
    }
}
