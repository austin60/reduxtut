import React from 'react';
import buyIceCream from '../redux/iceCream/iceCreamAction';
import { connect } from 'react-redux';

function IceCreamComponent(props){
    return(
        <div>
            <h3>Num of Ice cream-{props.numOfIceCream}</h3>
            <button onClick={props.buyIceCream}>Buy Icecream</button>
        </div>
    )
}

const mapStateToProps=(state)=>{
  return{
    numOfIceCream:state.icecream.numOfIceCream
  }
}

const mapDispatchToProps=dispatch=>{
    return{
        buyIceCream:()=>dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamComponent);