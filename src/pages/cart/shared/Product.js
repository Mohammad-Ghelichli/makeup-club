import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../context/CartContextProvider";
import cart from "../../../assets/icons/cart.svg"

function Product({ item }) {
  const { state, dispatch } = useContext(cartContext);
  console.log(state)
  return (
    
    <div class="product-card">
          <div class="badge">Hot</div>
          <div class="product-tumb">
            <img src={item.image_link} alt=""/>
          </div>
          <div class="product-details">
            <h4>{item.name}</h4><br/>
            <p> <h3>brand : {item.brand}</h3></p>
            <p> <Link to={`/detailes/:${item.id}`} ><h3 style={{color:"#B8010C",fontSize:"20PX"}}>Detailes</h3></Link></p>
            <div class="product-bottom-details">
              <div class="product-price"><small>$ {item.price}</small>${item.price}</div>
              <div class="product-links">
                <i class="fa fa-shopping-cart"><img width="50px" onClick={()=>dispatch({type:"ADD_TO_CART",payload:item})} src={cart} alt=""/></i>
              </div>
            </div>
          </div>
        </div>
    
  );
}

export default Product;
