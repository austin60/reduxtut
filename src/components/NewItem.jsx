import React from 'react';
import buyCake from '../redux/cake/cakeAction';
import buyIceCream from '../redux/iceCream/iceCreamAction';
import { connect } from 'react-redux';

function NewItem(props){
    return(
        <div>
           <h2>Item quantity-{props.item}</h2>
           <button onClick={props.buyItem}>Buy Item</button>
        </div>
    )
}

const mapStateToProps=(state,ownProps)=>{
const itemState=ownProps.cake
? state.cake.numOfCakes
:state.icecream.numOfIceCream
return{
    item:itemState
}
}

const  mapDispatchToProps=(dispatch,ownProps)=>{
const dispatchFunction=ownProps.cake
? ()=>dispatch(buyCake())
: ()=>dispatch(buyIceCream())

return{
    buyItem:dispatchFunction
}
}

export default connect(mapStateToProps,mapDispatchToProps)(NewItem);