import React from 'react';
import buyCake from '../redux/cake/cakeAction'
import { connect } from 'react-redux';

function CakeComponent(props){
    return(
        <div>
            <h3>Num of Cakes-{props.numOfCakes}</h3>
            <button onClick={props.buyCake}>Buy cake</button>
        </div>
    )
}

const mapStateToProps=state=>{
    return{
      numOfCakes:state.cake.numOfCakes
    }
  }
  
  const mapDispatchToProps=dispatch=>{
    return{
      buyCake:()=>dispatch(buyCake())
      
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(CakeComponent)