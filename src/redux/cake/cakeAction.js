import {BUY_CAKE} from './cakeType'

 const buyCake=(number)=>{
    return{
        type:BUY_CAKE,
        payload:number
    }
}
export default buyCake;
