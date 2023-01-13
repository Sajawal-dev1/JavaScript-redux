 import {GET_USERS_SUCCES} from './actions'
const myFirstReducer=(state=[],action)=>{
 
    switch (action.type){
        case GET_USERS_SUCCES:
            console.log("GET_USERS_SUCCES", action);
            return { ...state,users:action.users}
    default:
        return {...state};
    }
};
export default myFirstReducer; 