import { ERROR, LOADING, SUCCESS } from "./ActionType";

let intialstate={
    isLoading: false,
    isError: false,
    data:[]
}

export const ProReducers =(state=intialstate,action)=>{

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