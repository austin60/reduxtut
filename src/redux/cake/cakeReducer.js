import {BUY_CAKE} from './cakeType'

//init state
const initState={
    numOfCakes:20
}

//reducer
const cakeReducer=(state=initState,action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            numOfCakes:state.numOfCakes-action.payload
        }
        default:return state
    }
}

export default cakeReducer;