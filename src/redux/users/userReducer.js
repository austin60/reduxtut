import {FETCH_USER_REQUEST,FETCH_USER_SUCCESS,FETCH_USER_FAILURE} from './usersType';
//initState
const initState={
    loading:true,
    users:[],
    error:''
}

//reducer

const UserReducer=(state=initState,action)=>{
 switch(action.type){
    case FETCH_USER_REQUEST:return{
        ...state,
        loading:true
    }
    case FETCH_USER_SUCCESS:return{
        loading:false,
        users:action.payload,
        error:''
    }
    case FETCH_USER_FAILURE:return{
        loading:false,
        users:[],
        error:action.payload
    }
    default:return state
 }
}

export default UserReducer;