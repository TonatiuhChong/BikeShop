import React from "react";
import './ProductChart.css'
import {useStateValue} from '../StateProvider.js'

function ProductChart ({id,title,image,price,rating}){

  const [{basket},dispatch]= useStateValue();

  const removeitem= ()=>{
    dispatch({type:"REMOVE_FROM_CART",
            id:id})
  }

    return (
    <div className="productchart">
      <img src={image} alt="" className="productchart__image" />
      <div className="productchart__info">
            <p className="productchart__title">{title}</p>
            <p className="productchart__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
      
      <div className="productchart__rating">
            {Array(rating)
            .fill()
            .map((_) =>
            (<span>*</span>))
            }
      </div>  
      <button onClick={removeitem}>Remove from the cart</button>
      </div>
    </div>
    )
  
}

export default ProductChart;
